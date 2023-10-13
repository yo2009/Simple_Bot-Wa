import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*⚠️ Ingresa un link de GitHub!*`
if (!regex.test(args[0])) throw '*⚠️ El link es incorrecto. . .*'
m.react(rwait)
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendFile(m.chat, url, filename, null, m)
m.react(done)
}
handler.help = ['gitclone']
handler.tags = ['dl']
handler.command = ['gitclone']
export default handler