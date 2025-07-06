import { WAMessageStubType } from "@whiskeysockets/baileys";
import fetch from "node-fetch";

export async function before(m, { conn, participants, groupMetadata }) {
  try {
    if (!m.messageStubType || !m.isGroup) return true;

    let ppUrl = await conn.profilePictureUrl(m.messageStubParameters[0], "image").catch(
      () => "https://qu.ax/cqUYc.jpg"
    );
    let imgBuffer = await fetch(ppUrl).then(res => res.buffer()).catch(() => null);

    let chat = global.db?.data?.chats?.[m.chat];
    if (!chat) return true;

    const botName = "Eazzy X Bot 🤍";
    const user = `@${m.messageStubParameters[0].split("@")[0]}`;
    const groupName = groupMetadata.subject;
    const groupDesc = groupMetadata.desc || "🌎 Sin descripción";

    // 🎉 Bienvenida
    if (chat.bienvenida && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      const welcomeText = ` 𝗘𝗮𝘇𝘇𝘆 𝗫 𝗔𝘃𝗶𝘀𝗮 🤍\n\n🫴🏼𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 : *${user}!*\n🔱𝗚𝗿𝘂𝗽𝗼 : *${groupName}*\n💨𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼𝗻 : *${groupDesc}*`;

      await conn.sendMessage(m.chat, { 
        image: imgBuffer, 
        caption: welcomeText, 
        mentions: [m.messageStubParameters[0]] 
      });
    }
    if (chat.bienvenida && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
      const goodbyeText = `🤍 𝗘𝗮𝘇𝘇𝘆 𝗫 𝗔𝘃𝗶𝘀𝗮 🤍\n\n🫴🏼𝗨𝘀𝘂𝗮𝗿𝗶𝗼 𝗞𝗶𝗰𝗸 : *${user}*\n🔱𝗚𝗿𝘂𝗽𝗼 : *${groupName}`;

      await conn.sendMessage(m.chat, { 
        image: imgBuffer, 
        caption: goodbyeText, 
        mentions: [m.messageStubParameters[0]] 
      });
    }
    if (chat.bienvenida && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) {
      const kickText = `🤍 𝗘𝗮𝘇𝘇𝘆 𝗫 𝗔𝘃𝗶𝘀𝗮 🤍\n\n🫴🏼𝗨𝘀𝘂𝗮𝗿𝗶𝗼 𝗞𝗶𝗰𝗸 : *${user}*\n🔱𝗚𝗿𝘂𝗽𝗼 : *${groupName}*`;

      await conn.sendMessage(m.chat, { 
        image: imgBuffer, 
        caption: kickText, 
        mentions: [m.messageStubParameters[0]] 
      });
    }
  } catch (error) {
    console.error("❌ Error en bienvenida/despedida:", error);
  }
}
