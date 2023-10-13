import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Ingresa un link de Tiktok`
    m.react(rwait)
  let chat = global.db.data.chats[m.chat]
let vid = `https://api.boxmine.xyz/api/tiktok?url=${args[0]}`

conn.sendFile(m.chat, vid, 'TikTok.mp4', `*Aqui tienes 🐤*\n\n • Url: ${args[0]}`, m)
m.react(done)
}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = ['tiktok', 'tiktokdl']
export default handler