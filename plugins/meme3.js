const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/mememexico")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, ShadowBot, "*😂😂😂😂😂*", '©𝑲𝑨𝑵 - 𝑩𝑶𝑻', '😂 SIGUIENTE 😂', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(meme3)$/i
module.exports = handler
