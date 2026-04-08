const { getTime } = global.utils;

module.exports = {
  config: {
    name: "noti",
    version: "1.5 👑",
    author: "Célestin",
    shortDescription: { fr: "Notifier tous les groupes (admin seulement)" },
    category: "Général",
    guide: { fr: "{pn} <message>" }
  },

  onStart: async function ({ api, args, message, event, usersData }) {
    const senderID = event.senderID;

    // ✅ TON ID ADMIN DIRECT
    const botAdmins = ["61561648169981"];

    if (!botAdmins.includes(senderID)) {
      return message.reply(
`🇫🇷━━━━━━━━━━━━━━━━━━━━
❌ ACCÈS REFUSÉ
━━━━━━━━━━━━━━━━━━━━
👑 Commande réservée aux administrateurs
━━━━━━━━━━━━━━━━━━━━`
      );
    }

    const input = args.join(" ").trim();
    if (!input) {
      return message.reply("❌ Ajoute un message à envoyer.");
    }

    try {
      const threads = await api.getThreadList(50, null, ["INBOX"]);
      const groups = threads.filter(t => t.isGroup);

      if (!groups.length) {
        return message.reply("❌ Aucun groupe trouvé.");
      }

      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();

      const adminName = await usersData.getName(senderID);

      for (const group of groups) {
        const info = await api.getThreadInfo(group.threadID);

        const msg =
`🇫🇷━━━━━━━━━━━━━━━━━━━━
👑 𝘾𝙊𝙈𝙈𝙐𝙉𝙄𝙌𝙐𝙀́ 𝙊𝙁𝙁𝙄𝘾𝙄𝙀𝙇
━━━━━━━━━━━━━━━━━━━━

🏷️ Groupe : ${info.threadName}
👥 Membres : ${info.participantIDs.length}
🕒 Heure : ${hours}:${minutes} | 📅 ${day}/${month}/${year}

━━━━━━━━━━━━━━━━━━━━
📝 ${input}

━━━━━━━━━━━━━━━━━━━━
🤝 Liberté • Égalité • Respect
👤 Responsable : @${adminName}
━━━━━━━━━━━━━━━━━━━━`;

        await api.sendMessage({
          body: msg,
          mentions: [{
            id: senderID,
            tag: adminName
          }]
        }, group.threadID);
      }

      message.reply(`✅ Notification envoyée dans ${groups.length} groupes.`);
    } catch (err) {
      console.error(err);
      message.reply("❌ Impossible d'envoyer la notification.");
    }
  }
};
