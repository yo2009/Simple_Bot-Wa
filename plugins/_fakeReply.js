import fetch from 'node-fetch'
export async function before(m,{conn }) {
	
	let who = m.sender ? m.sender : conn.user.jid && conn.user.jid ? conn.user.jid : '0@s.whatsapp.net'
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: link_uni, mediaType: 'VIDEO', description: 'Grupo ofc de Simple Wa Bot', title: 'Simple Wa Bot | FzTeis', body: 'grupo de soporte', thumbnailUrl: 'https://telegra.ph/file/e0a75db0c8d1dd7b1cd27.jpg', sourceUrl: link_uni }}}
}