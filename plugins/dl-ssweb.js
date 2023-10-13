import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, usedPrefix, command, isOwner, isPrems }) => {
	
   if (!args[0]) throw `✳️ Ingrese el link junto al comando`
    m.react(rwait)
let ss = await (await fetch(`https://image.thum.io/get/fullpage/${args[0]}`)).buffer()

await conn.sendFile(m.chat, ss, 'ssweb.png', bottime, m, null, rpl)
}
handler.command = ['ssweb'] 
export default handler