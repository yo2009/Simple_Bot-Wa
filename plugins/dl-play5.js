import yts from 'yt-search'
import fs from 'fs'
import fetch from 'node-fetch' 
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `⚠️ *_Ingresa el título de una canción._*\n\n*_📌 Ejemplo :_* *${usedPrefix + command}* Sit Down Be Side Me`
	
	let res = await yts(text)
let vid = res.videos[0]
	if (!vid) throw '⚠️️ *_Vídeo/Audio no encontrado :(._*'
	
let isVideo = /6|vid6$/.test(command)

let q = isVideo ? '360p' : '128kbps' 
  let v = vid.url
  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
  let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
  let title = await yt.title
  
let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid    
let texto1 = `
❏ 🐢 *Autor:* ${vid.author.name}
❏ 📓 *Título:* ${title}
❏ 🗓️ *Publicado:* ${ago}
❏ ⏰ *Duración:* ${timestamp}
❏ 👀 *Vistas:* ${views}
❏ 🌱 *Url:* ${url}`
let buttonMessage= {
'document': { url: `https://chat.whatsapp.com/IZnTbIcSVI6EXYHII2hlrK` },
'mimetype': `application/pdf`,
'fileName': `⊜─⌈📻 ◜YouTube Play◞ 📻⌋─⊜`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `https://chat.whatsapp.com/IZnTbIcSVI6EXYHII2hlrK`,
'mediaType': 2,
'previewType': 'VIDEO',
'title': null,
'body': null,
'thumbnail': await (await fetch(thumbnail)).buffer(),
'sourceUrl': 'https://chat.whatsapp.com/IZnTbIcSVI6EXYHII2hlrK' }},
'caption': texto1,
'footer': '\nVideos de YouTube',
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })

conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), ``, m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: false })
}
handler.command = ['play5', 'play6', 'play']
export default handler