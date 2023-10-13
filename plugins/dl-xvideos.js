import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Ingresa un link de Xvideos`
    if (!args[0].match(/xvideos.com/gi)) throw `*_❎ Link incorrecto, corrobora que el link sea igual a este:_*\n*https://www.xvideos.com/video68356811/no_te_resistas_pov_misionera_y_enorme_corrida_en_su_cuerpo_perfecto*`
    m.react(rwait)
  let chat = global.db.data.chats[m.chat]
  let simple = await fetch(`https://api-fgmods.ddns.net/api/downloader/xvideosdl?url=${args[0]}&apikey=ELhI4IG6`)
let sim = await simple.json()
let image = sim.result.thumb
let txt = `
  ❰ *X V I D E O S  -  D L* ❱

 • *Titulo:* ${sim.result.title}
 • *Vistas:* ${sim.result.views}
 • *Likes:* ${sim.result.likes}
 • *Tags:* ${sim.result.keyword}
`
conn.sendFile(m.chat, image, 'xvideos.jpg', txt, m, null, rpl)

await conn.sendFile(m.chat, sim.result.url_dl, 'Xvideos.mp4', `*Aqui tienes tu video 🦖*\n\n • Url: ${args[0]}`, m, null, rpl)
m.react(done)
}
handler.help = ['xvideos']
handler.tags = ['dl']
handler.command = ['xvid', 'xvideos', 'xviddl']
export default handler