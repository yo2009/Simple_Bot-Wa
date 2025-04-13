let handler = async (m, { conn, usedPrefix }) => {
  try {
    let name = await conn.getName(m.sender)
    let tag = `@${m.sender.split("@")[0]}`
    let greeting = ucapan()

    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      }
    })

    let tags = {}
    for (let plugin of help) {
      if (plugin && plugin.tags) {
        for (let tag of plugin.tags) {
          if (tag) tags[tag] = tag.toUpperCase()
        }
      }
    }

    let text = `${greeting} ${tag}!\n\n`
    for (let category of Object.keys(tags)) {
      let cmds = help
        .filter(menu => menu.tags && menu.tags.includes(category) && menu.help)
        .map(menu => menu.help.map(cmd => `• ${usedPrefix}${cmd}`).join('\n'))
        .join('\n')

      if (cmds.trim()) {
        text += `乂 ${tags[category]}\n${cmds}\n\n`
      }
    }

    conn.reply(m.chat, text.trim(), m, { mentions: conn.parseMention(text) })
    m.react("🍂")
  } catch (e) {
    conn.reply(m.chat, '❎ Error al mostrar el menú.', m)
    throw e
  }
}

handler.command = ['menu', 'help', 'menú', 'commands', 'comandos', '?']
handler.register = true
export default handler

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')
  if (time >= 18) return "Good night. 🌃"
  if (time >= 15) return "Good afternoon. 🌇"
  if (time >= 10) return "Good afternoon. 🌇"
  if (time >= 4) return "Good morning. ⛅"
  return "Hello."
}