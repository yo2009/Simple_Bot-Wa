import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Ingresa el nombre de una apk`
    m.react(rwait)
  let chat = global.db.data.chats[m.chat]
  let img = 'https://telegra.ph/file/8701be16375be60d6e9c1.jpg'
  let res = await fetch(`https://api.akuari.my.id/search/searchapk2?query=${args[0]}`)
let json = await res.json()
let ress = json.respon.map((v) => `*• 🌾 Titulo: ${v.title}\n*• 🖇️ Link: ${v.link}*\n*• Última actualización: ${v.update}*`).join`\n┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`
//m.reply(ress)
conn.sendFile(m.chat, img, 'Apks.jpg', ress, m, null, rpl)
m.react(done)
}
handler.help = ['apks']
handler.tags = ['dl']
handler.command = ['apks']
export default handler