import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    let grupos = "*Hola!, te invito a unirte a los grupos oficiales del Bot para convivir con la comunidad* ⭐\n\n" +
                 "1 - Pruebas Eazzy X Bot\n" +
                 "*✰* https://chat.whatsapp.com/IFkJ3LVePPC0FDGFuDul98" +
                 "*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*\n\n" +
                 "➠ Enlace anulado? entre aquí! \n\n" +
                 "⭐ Reclutamiento  Eazzy :\n" +
                 "*✰*https://chat.whatsapp.com/KyG4Y5cGAlV1LdhB27aZOI" +
                 "> By Eazzy X";

    // Asegúrate de definir 'imagen2' correctamente antes de usarlo
    let imagen2 = 'https://qu.ax/cqUYc.jpg';

    // Define los emojis que quieres usar
    let emojis = '🍁';

    await conn.sendFile(m.chat, imagen2, "ian.jpg", grupos, m, null, rcanal);
    await m.react(emojis);
}

handler.help = ['grupos'];
handler.tags = ['main'];
handler.command = ['grupos', 'iangrupos', 'gruposian'];

export default handler;
