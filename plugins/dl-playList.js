import yts from 'yt-search';
import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*⚠️ Ingresa un texto*\n\n*◉ Ejemplo:*\n*${usedPrefix + command} Te amo y más*`
try {
let vids_ = { 
from: m.sender, 
urls: [] 
}
if (!global.videoList) {
global.videoList = [];
}
if (global.videoList[0]?.from == m.sender) {
delete global.videoList;
}
let results = await yts(text);
let teks = results.all.map((v, i) => {
let link = v.url;
vids_.urls.push(link);
return `[ ${i + 1} ] ${v.title}
↳ 🫐 *_Link :_* ${v.url}
↳ 🕒 *_Duración :_* ${v.timestamp}
↳ 📥 *_Subido :_* ${v.ago}
↳ 👁 *_Vistas :_* ${v.views}`}).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n')
conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', `*Y O U T U B E - S E A R C H*` + '\n\n' + teks, m)
global.videoList.push(vids_);
} catch {    
await m.reply('*⚠️ Error, Vuelve a intentarlo*')  
}}
handler.help = ['playlist', 'yts'];
handler.tags = ['dl'];
handler.command = ['playlist', 'playlist2', 'yts']
export default handler;