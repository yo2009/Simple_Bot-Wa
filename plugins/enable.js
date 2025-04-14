let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let xx = '```'
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false

  let allOptions = {
    chat: Object.keys(chat).filter(k => typeof chat[k] === 'boolean'),
    user: Object.keys(user).filter(k => typeof user[k] === 'boolean'),
    bot: Object.keys(bot).filter(k => typeof bot[k] === 'boolean'),
  }

  if (allOptions.chat.includes(type)) {
    if (m.isGroup && !(isAdmin || isOwner)) return global.dfail('admin', m, conn)
    chat[type] = isEnable
  } else if (allOptions.user.includes(type)) {
    isUser = true
    user[type] = isEnable
  } else if (allOptions.bot.includes(type)) {
    isAll = true
    if (!(isROwner || isOwner)) return global.dfail('owner', m, conn)
    bot[type] = isEnable
  } else {
    let formatList = (label, list) => list.length ? `  乂 *${label.toUpperCase()}*\n${xx} ${list.join('\n ')} ${xx}` : ''
    return m.reply(`
☁️ \`໋≡ Lista de Opciones:\`

${formatList('admin', allOptions.chat)}
${formatList('users', allOptions.user)}
${formatList('owner', allOptions.bot)}

*📌 Ejemplo:*
*${usedPrefix}on* ${xx}bienvenida${xx}
*${usedPrefix}off* ${xx}nsfw${xx}
`.trim())
  }

  m.reply(`
✅ *${type.toUpperCase()}* ${isEnable ? '*activado*' : '*desactivado*'} ${isAll ? 'para el bot globalmente' : isUser ? '' : 'en este grupo'}
  `.trim())
}

handler.help = ['enable', 'disable'].map(v => v + ' <opción>')
handler.tags = ['config']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler