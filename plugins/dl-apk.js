import fetch from 'node-fetch' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `⚠️️ *_Ingrese un link de descarga, use el comando ${usedPrefix}apks <txt> para obtener uno._*`
    if (!args[0].match(/androidapksfree.com/gi)) throw `*_❎ Link incorrecto, corrabore que el link sea igual a este:_*\nhttps://androidapksfree.com/whatsapp-messenger/com-whatsapp/`
    try {
    let res = await fetch(`https://api.akuari.my.id/downloader/dlapk2?link=${args[0]}`)
    let json = await res.json()
    let { linkdl, size } = json.respon
    m.react(rwait)
    
conn.sendMessage(m.chat, { document: { url: `${linkdl}` }, mimetype: 'application/videos.android.package-archive', fileName: `Apk_Donwload [ Simple | Wa Bot ].apk` }, { quoted: m })
m.react(done)
} catch { m.reply('⚠️ *_Resultados no encontrados._*') }
}
handler.help = ['apkdl']
handler.tags = ['dl']
handler.command = ['dlapk', 'apkdl'] 
export default handler