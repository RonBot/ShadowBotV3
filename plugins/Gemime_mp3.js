let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Gemime.mp3'
conn.sendFile(m.chat, vn, 'Gemime.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /gemime|Gemime/
handler.command = new RegExp
module.exports = handler
