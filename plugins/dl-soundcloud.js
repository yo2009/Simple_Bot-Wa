import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*⚠️ Ingresa el nombre de una canción*`
try {
let res = await fetch(`https://api.akuari.my.id/search/searchsoundcloud?query=${text}`)
let json2 = await res.json()
let urlSC = await json2.hasil[0].url
let res2 = await fetch(`https://api.akuari.my.id/downloader/scdl?link=${urlSC}`)
let json = await res2.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.link}`)).text()
let soundcloudt = `❒┈┈┈❬ 𝐒𝐎𝐔𝐍𝐃𝐂𝐋𝐎𝐔𝐃 ❭┈┈┈❒
┬
├‣✨ *Titulo:* ${json.title}
┴
┬
├‣💚 *Url directo:* ${shortUrl}
┴
_*Espera en lo que se envia. . .*_`
conn.sendFile(m.chat, json.thumb, '', soundcloudt, m)
conn.sendMessage(m.chat, { audio: { url: json.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
} catch (e) {
throw '*⚠️ Ocurrio un error. . . Inténtalo nuevamente*'
}}
handler.help = ['soundcloud', 'cover']
handler.tags = ['dl']
handler.command = ['soundcloud', 'cover']
export default handler