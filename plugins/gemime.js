let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/gemime.m4a'
conn.sendFile(m.chat, vn, 'gemime.m4a', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /gemime| Gemime/
handler.command = new RegExp
module.exports = handler
