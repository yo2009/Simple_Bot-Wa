import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, text, usedPrefix, command, isOwner, isPrems }) => {
	
   if (!args[0]) throw `✳️ Ingrese el link de mediafire junto al comando`
    if (!args[0].match(/mediafire/gi)) throw `❎ Link incorrecto`
    m.react(rwait)
	let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
let ss = await (await fetch(`https://image.thum.io/get/fullpage/${args[0]}`)).buffer()
    try {
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE DL*
⌬ *Nombre:* ${filename}
⌬ *Tamaño:* ${filesizeH}
⌬ *Extension:* ${ext}
⌬ *Subido:* ${aploud}
`.trim()
    await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m, null, rpl)  
await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
    
    } catch {

        try {
	let res = await fg.mediafireDl(args[0])
     let { url, url2, filename, ext, upload_date, filesize, filesizeB } = res
    let caption = `
   ≡ *MEDIAFIRE DL*
⌬ *Nombre:* ${filename}
⌬ *Tamaño:* ${filesize}
⌬ *Extension:* ${ext}
⌬ *Subido:* ${upload_date}
`.trim()

await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m, null, rpl)
await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
} catch {
    m.reply(`Error: intenta con otro link`)
}

  }
  
}
handler.help = ['mediafire']
handler.tags = ['dl']
handler.command = ['mediafire', 'mfire', 'mfdl', 'mf'] 
export default handler