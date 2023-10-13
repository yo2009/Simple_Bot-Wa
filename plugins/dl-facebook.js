import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Ingresa un link de Facebook`
    m.react(rwait)
  let chat = global.db.data.chats[m.chat]
  let simple = await fetch(`https://api.akuari.my.id/downloader/fbdl3?link=${args[0]}`)
let sim = await simple.json()
await conn.sendFile(m.chat, sim.hasil.hd, sim.hasil.title + '.mp4', `*Aqui tienes tu vídeo de facebook 🐥*\n\n *• Calidad: HD*\n\n *• Titulo: ${sim.hasil.title}*\n\n _*• Url: ${args[0]}*_`, m, null, { mimetype: '', asDocument: chat.useDocument }, rpl)
m.react(done)
}
handler.help = ['facebook']
handler.tags = ['dl']
handler.command = ['fb', 'facebook', 'fbdl']
export default handler