import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
 // let user = @${m.sender.split`@`[0]}
  let username = conn.getName(m.sender)
  let simple1 = `${username}\n\n  Simple | Wa Bot`
  let simple2 = ``
  let img = await (await fetch('https://telegra.ph/file/e0a75db0c8d1dd7b1cd27.jpg')).buffer()
  try {
  	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('⚠️ *_Máximo 10 segundos._*')
      let img = await q.download?.()
      if (!img) throw `⚠️️ *_Responde a una imagen o video con ${usedPrefix + command}_*`
      let out
      try {
        stiker = await sticker(img, false, simple1, simple2)
      } catch (e) {
        console.error(e)
      } finally {
     m.react('🖼️')
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, simple1, simple2)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], simple1, simple2)
      else return m.reply('URL invalido')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': true, externalAdReply:{ showAdAttribution: true, title: `🌾 Sticker By: Simple | Wa Bot`, body: ``, mediaType: 4, sourceUrl: link_uni, thumbnail: img}}}, { quoted: m })
    else throw '⚠️ *_La conversión ha fallado, intenta enviar primero imagen/video/gif y luego responde con el comando._*'
  }
}
handler.help = ['sticker']
handler.tags = ['dl']
handler.command = ['s', 'sticker', 'st']
export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}


//᭥🕒᭢━━━━━━◜𝑻𝑰𝑬𝑴𝑷𝑶◞━━━━━━᭥🕒᭢
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.año = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//╰─────────────────────╯