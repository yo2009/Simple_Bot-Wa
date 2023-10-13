import { googleImage, pinterest } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*⚠️ Ingresa un texto!*\n\n*🦀 Ejemplo: ${usedPrefix + command} Miku Hatsune*`
m.react(rwait)
    const res = await (await googleImage('rule34 ' + text)).getRandom()
    conn.sendFile(m.chat, res, `${text}_rule34.jpg`, `*Resultado de: ${text}*\n\n${botdate}`, m, null, rpl)
m.react('🔥')
}
handler.help = ['rule34']
handler.tags = ['dl']
handler.command = ['rule34', 'r34']
export default handler