const { getTime } = global.utils;

module.exports = {
	config: {
		name: "logsbot",
		isBot: true,
		version: "1.4",
		author: "NTKhang",
		envConfig: {
			allow: true
		},
		category: "events"
	},

	langs: {
		fr: {
			title: "👑═🇫🇷 ROYAL NOTIFICATION ═👑",
			added: "✅ Événement : Le bot a été ajouté à un nouveau groupe\n👤 Ajouté par : %1",
			kicked: "❌ Événement : Le bot a été expulsé du groupe\n👤 Expulsé par : %1",
			footer: "🔹 ID utilisateur : %1\n🔹 Nom du groupe : %2\n🔹 ID du groupe : %3\n🔹 Heure : %4\n🌟 Style Royal 🌟"
		}
	},

	onStart: async ({ usersData, threadsData, event, api, getLang }) => {
		if (
			(event.logMessageType == "log:subscribe" && event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
			|| (event.logMessageType == "log:unsubscribe" && event.logMessageData.leftParticipantFbId == api.getCurrentUserID())
		) return async function () {
			let msg = "╔════════════════════════════╗\n";
			msg += " " + getLang("title") + "\n";
			msg += "╠════════════════════════════╣";

			const { author, threadID } = event;
			if (author == api.getCurrentUserID()) return;

			let threadName;
			const { config } = global.GoatBot;

			if (event.logMessageType == "log:subscribe") {
				if (!event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
					return;
				threadName = (await api.getThreadInfo(threadID)).threadName;
				const authorName = await usersData.getName(author);
				msg += "\n" + getLang("added", authorName);
			} else if (event.logMessageType == "log:unsubscribe") {
				if (event.logMessageData.leftParticipantFbId != api.getCurrentUserID())
					return;
				const authorName = await usersData.getName(author);
				const threadData = await threadsData.get(threadID);
				threadName = threadData.threadName;
				msg += "\n" + getLang("kicked", authorName);
			}

			const time = getTime("DD/MM/YYYY HH:mm:ss");
			msg += "\n" + getLang("footer", author, threadName, threadID, time);
			msg += "\n╚════════════════════════════╝";

			for (const adminID of config.adminBot)
				api.sendMessage(msg, adminID);
		};
	}
};
