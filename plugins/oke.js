let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/oke.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*OKE BOS*', 'status@broadcast')
}

handler.customPrefix = /^(ok|oke)$/i
handler.command = new RegExp

module.exports = handler