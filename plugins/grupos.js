let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*Ola ${username} 😎, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Kan - Bot*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/F7xxlnQ0VHg73IW5gJPtBA 

*2.-* https://chat.whatsapp.com/KHpBdTLe0K57qOIxdYxXs5

*3.-* https://chat.whatsapp.com/HguDoHEsQ4iLjVfKKnaWpx
`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 𝑲𝑨𝑵 - 𝑩𝑶𝑻 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.jpg`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
