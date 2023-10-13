import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Ingresa un link de Instagram`
    m.react(rwait)
  let chat = global.db.data.chats[m.chat]
  let simple = await fetch(`https://api.akuari.my.id/downloader/igdl?link=${args[0]}`)
let sim = await simple.json()
await conn.sendFile(m.chat, sim.respon, 'Instagram.mp4', `*Aqui tienes 🐤*\n\n • Url: ${args[0]}`, m, null, rpl)
m.react(done)
}
handler.help = ['instagram']
handler.tags = ['dl']
handler.command = ['ig', 'instagram', 'igdl']
export default handler