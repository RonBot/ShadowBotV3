let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send3Button(m.chat, `
*ミ😎 Ola estimado usuario 🥀彡*

*ミ🤖 Estado del Bot 🤖彡*
*=> Bot activo ✔️*
*=> Bot uso público ✔️*
`.trim(), '©𝑲𝑨𝑵 - 𝑩𝑶𝑻🌙', '🥀️ MENÚ 🥀', `${usedPrefix}menu`, '🌙️ MENÚ SIMPLE 🌙️', `${usedPrefix}menusimple`, '😎 MENÚ AUDIOS 😎', `${usedPrefix}menuaudios`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
module.exports = handler
