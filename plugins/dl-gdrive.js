import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Ingresa un link de Google Drive\n\n*🌾 Ejemplo:*\n\n*${usedPrefix + command} https://drive.google.com/file/d/10xcd3sGfGRlNgDyS88UOyHLj_L4M_WXU/view*`
    m.react(rwait)
  let chat = global.db.data.chats[m.chat]
  let simple = await fetch(`https://api-fgmods.ddns.net/api/downloader/gdrive?url=${args[0]}&apikey=ELhI4IG6`)
let sim = await simple.json()
let name = sim.result.fileName
let link_dl = sim.result.downloadUrl
let type = sim.result.mimetype
let peso = sim.result.fileSize

conn.reply(m.chat, `*° Nombre: ${name}*\n*° Tipo: ${type}*\n*° Peso del archivo: ${peso}*`, m)

await conn.sendMessage(m.chat, {document: {url: link_dl}, mimetype: type, fileName: name}, {quoted: m})
m.react(done)
}
handler.help = ['gdrive']
handler.tags = ['dl']
handler.command = ['gdrive']
export default handler