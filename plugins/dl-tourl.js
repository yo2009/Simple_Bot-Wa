import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*⚠️ Responde a una imagen o video!*'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`📮 *L I N K :*
${link}
📊 *Peso :* ${media.length} Byte
📛 *E x p i r e d :* ${isTele ? 'Sin especificar' : 'Unknown'}`)
}
handler.help = ['tourl']
handler.tags = ['dl']
handler.command = ['tourl', 'upload']
export default handler