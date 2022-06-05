let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
//    pp = await conn.getProfilePicture(who)
} catch (e) {
} finally {
let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let str = `
╭══〘✦ ✦ ✦ ✦ ✦ ✦〙═╮
║ᚏᚏᚏᚏᚏᚏᚏᚏᚏᚏ
║➣ *🥀𝗛ola, ${username}!!*
║ᚏᚏᚏᚏᚏᚏᚏᚏᚏᚏ
╰══〘✦ ✦ ✦ ✦ ✦ ✦〙══╯
┏━─━─━─━─━─━─━─
┃ *ꪶMENU SIMPLEꫂ*
┃ᚏᚏᚏᚏᚏᚏᚏᚏᚏᚏ
┣᚛༊⃟⃟⃟🥀 _${usedPrefix}donar_
┣᚛༊⃟⃟⃟🥀 _${usedPrefix}infobot_
┣᚛༊⃟⃟⃟🥀 _${usedPrefix}grupos_
┣᚛༊⃟⃟⃟🥀 _${usedPrefix}instalarbot_
┣᚛༊⃟⃟⃟🥀 _${usedPrefix}menusimple_
┣᚛༊⃟⃟⃟🥀 _${usedPrefix}menuaudios_
┣᚛༊⃟⃟⃟🥀 _${usedPrefix}menu2_
┣᚛༊⃟⃟⃟🥀 _${usedPrefix}estado_
┣᚛༊⃟⃟⃟🥀 _Bot_
┣᚛༊⃟⃟⃟🥀 _¿Qué es un Bot?_
┣᚛༊⃟⃟⃟🥀 _Codigos para audios_
┣᚛༊⃟⃟⃟🥀 _Términos y condiciones_
┣᚛༊⃟⃟⃟🦠 _${usedPrefix}bug_
┣᚛༊⃟⃟⃟🦠 _${usedPrefix}report_
┣᚛༊⃟⃟⃟🤖 _${usedPrefix}join_ 
┣᚛༊⃟⃟⃟🤖 _${usedPrefix}bots_
┣᚛༊⃟⃟⃟️🔮️ _${usedPrefix}top10gays_
┣᚛༊⃟⃟⃟️🔮️ _${usedPrefix}toplind@s_
┣᚛༊⃟⃟⃟️🔮️ _${usedPrefix}topput@s_
┣᚛༊⃟⃟⃟🔮️ _${usedPrefix}toppajer@s_
┣᚛༊⃟⃟⃟️🔮️ _${usedPrefix}topotakus_
┣᚛༊⃟⃟⃟👑 _${usedPrefix}owner_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}math_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}ttt_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}delttt_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}2gay_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}gay_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}lesbi_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}pajero_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}pajera_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}puta_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}puto_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}rata_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}manco_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}manca_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}formarpareja_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}dado_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}simsimi_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}formartrio_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}love_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}amigorandom_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}slot_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}ppt_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}prostituta_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}prostituto_
┣᚛༊⃟⃟⃟🏆 _${usedPrefix}doxear_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}imagen_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}ytsearch_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}dlaudio_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}dlvid_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}ytmp3_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}ytmp4_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}ytmp4.2_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}play_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}play2_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}play3_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}play4_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}letra_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}google_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}googlef_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}wikipedia_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}pinterestvideo_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}tiktok_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}acortar_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}pinterest_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}xnxx_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}xnxxsearch_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}ssweb_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}igstory_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}igstalk_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}animeinfo_
┣᚛༊⃟⃟⃟⏳ _${usedPrefix}twvid_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}admins_ 
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}añadir_ 
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}sacar_ 
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}save_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}daradmin_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}quitaradmin_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}grupo abrir/cerrar_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}enable nsfw_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}disable nsfw_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}enable welcome_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}disable welcome_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}enable antilink_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}disable antilink_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}enable antilink2_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}disable antilink2_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}enable delete_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}disable  delete_ 
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}link_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}notificar_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}setname_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}setdesc_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}infogrupo_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}invocar_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}del_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}fantasmas_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}banchat_
┣᚛༊⃟⃟⃟🎃 _${usedPrefix}unbanchat_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}s_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}sticker_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}semoji_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}wasted_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}stonks_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}trash_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}rainbow_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}circle_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}trigger_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}stickermaker_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}attp_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}style_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}attp2_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}stickerfilter_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}mp3_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}img_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}blur_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}swm_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}gif_
┣᚛༊⃟⃟⃟🎈 _${usedPrefix}tovideo_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}frase_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}futbol_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}Messi_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}animal_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}meme_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}meme2_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}meme3_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}cat_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}dog_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}pikachu_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}waifu_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}blackpink_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}reto_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}verdad_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}imagenrandom_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}neko_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}lolivid_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}iqtest_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}kpopitzy_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}navidad_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}loli_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}gawrgura_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}miku_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}nyan_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}pat_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}itachi_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}slap_
┣᚛༊⃟⃟⃟🌚️ _${usedPrefix}pat_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}perfil_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}scan_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}kpop_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}qr_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}afk_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}CristianoRonaldo_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}pregunta_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}mention_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}spamchat_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}traducir es_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}zodiac_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}readmore_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}calc_ 
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}spamwa_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}readqr_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}anime_
┣᚛༊⃟⃟⃟🌚 _${usedPrefix}subirestado_
┣᚛༊⃟⃟⃟🧊 _${usedPrefix}bass_
┣᚛༊⃟⃟⃟🧊 _${usedPrefix}deep_
┣᚛༊⃟⃟⃟🧊 _${usedPrefix}earrape_
┣᚛༊⃟⃟⃟🧊 _${usedPrefix}fast_
┣᚛༊⃟⃟⃟🧊 _${usedPrefix}fat_
┣᚛༊⃟⃟⃟🧊 _${usedPrefix}nightcore_
┣᚛༊⃟⃟⃟🧊 _${usedPrefix}reverse_
┣᚛༊⃟⃟⃟🧊 _${usedPrefix}robot_
┣᚛༊⃟⃟⃟🧊 _${usedPrefix}slow_
┣᚛༊⃟⃟⃟🧊 _${usedPrefix}smooth_
┣᚛༊⃟⃟⃟🧊 _${usedPrefix}vibracion_
┣᚛༊⃟⃟⃟🎧 _${usedPrefix}menu2_
┣᚛༊⃟⃟⃟🎧 _${usedPrefix}menuaudios_
┣᚛༊⃟⃟⃟☠️ _${usedPrefix}start_
┣᚛༊⃟⃟⃟☠️ _${usedPrefix}next_
┣᚛༊⃟⃟⃟☠️ _${usedPrefix}leave_
┣᚛༊⃟⃟⃟😎 _${usedPrefix}stop_
┣᚛༊⃟⃟⃟😎 _${usedPrefix}jadibot_
┣᚛༊⃟⃟⃟😎 _${usedPrefix}getcode_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}logos_ 
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}lolice_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}simpcard_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}hornycard_ 
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}lblackpink_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}coffe_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}tahta_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}nulis_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}nulis2_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}lolice_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}simpcard_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}logotaza_ 
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}logocesped_ 
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}logotaza2_ 
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}flaming_ 
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}logofire_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}logosky_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}logocorazon_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}logorandom_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}neonfire_ 
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}technology_ 
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}playa_ 
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}ytcomment_ 
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}lovemessages_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}cementerio_
┣᚛༊⃟⃟⃟🧿 _${usedPrefix}romanticdouble_
┣᚛༊⃟⃟🧿 _${usedPrefix}romanticmessages_
┗━─━─━─━─━─━─━─
`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(menusimple)$/i
handler.fail = null
module.exports = handler
