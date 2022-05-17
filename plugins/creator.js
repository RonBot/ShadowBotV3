function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '573023900508', 'Kanixxx Creador - Oficial 1', m)
this.sendContact(m.chat, '50488899999', 'Kanixxx - Creador - Oficial 2', m)}
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i
module.exports = handler
