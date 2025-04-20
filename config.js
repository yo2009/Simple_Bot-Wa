import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['5212431268546', '©FzTeis', true],
  ['5215549715429', 'Mr. Shaddy', true],
  ['5212431285029', 'Im Atomic', true], 
  ['17146121800', true],
  ['13157103615', true]
] //Numeros de owner 

global.mods = [] 
global.prems = []
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'TU-APIKEY' //Regístrese en https://api-fgmods.ddns.net/
}

// Sticker WM & prefijo
global.prefijo = "§";
global.packname = '☪️┊Simple | Wa Bot  ͙۪▩⃟⁩ 🎋'
global.wm = '⚕️┊Simple | Wa Bot  ͙۪▩⃟⁩ 🌾'
global.author = '©FzTeis'
global.link_uni = 'https://chat.whatsapp.com/JQMyVsc8U4iEHi7qLFgYNH'
global.simple_logo = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ Cargando . . . Espera un momento 🦖*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 
//############
global.imagen = fs.readFileSync('./Simple_fz.jpg');
global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
//############
global.simpleSession = `Sesion/Sesion By | FzTeis`
global.dbSimple = `Sesion/database.json`

//Tiempo del bot
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.año = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
