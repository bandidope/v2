let handler = async (m, { conn, isAdmin, isROwner }) => {
    if (!(isAdmin || isROwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    await conn.reply(m.chat, `🧑‍💻EAZZY FUE BANEADO EN ESTE CHAT POR UM ADMINISTRADOR`, m, rcanal)
    await m.react('✅')
}
handler.help = ['banearbot']
handler.tags = ['group']
handler.command = ['banearbot', 'banchat']
handler.group = true 
handler.admin = true 
export default handler
