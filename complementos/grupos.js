let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Kan - Bot😎*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ

*2.-* 🔥ENLACES 》https://chat.whatsapp.com/F7xxlnQ0VHg73IW5gJPtBA 

*3.-* 😎AMISTAD 》https://chat.whatsapp.com/KHpBdTLe0K57qOIxdYxXs5 


`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 THE SHADOW BROKERS - BOT 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.jpg`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
