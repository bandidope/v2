let handler = async (m, { isPrems, conn }) => {
    let time = global.db.data.users[m.sender].lastcofre + 86400000; // 86400000 24 Horas
    if (new Date() - global.db.data.users[m.sender].lastcofre < 0) {
        throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\n𝚅𝙾𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`;
    }

    let img = 'https://qu.ax/cqUYc.jpg'; 
    let texto = `*_FORMULARIO EAZZY X ☁️_*

● *NOMBRE*: 
● *NICK*:   
● *EDAD*:
● *PAIS*: 
● *ROL*: 
● *📱O 🖥️ :*
● *IG:*
● *DISPONIBILIDAD DE HORARIOS ?*: 
● *EN QUE TE ESPECIALIZAS MAPAS / VV2 O APOST :*`;

    const fkontak = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    };

    await conn.sendFile(m.chat, img, 'hades.jpg', texto, fkontak);
    global.db.data.users[m.sender].lastcofre = new Date().getTime(); // Cambié a getTime para mayor claridad
};

handler.command = ['formulario']; 
handler.botAdmin = false;
handler.admin = true;
handler.group = true;
export default handler;