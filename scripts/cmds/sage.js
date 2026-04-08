const fs = require('fs');

module.exports = {
 config: {
 name: "sage",
 aliases: ["sg"],
 version: "1.0",
 author: "olua",
 countDown: 5,
 role: 0,
 description: "extract file",
 category: "owner",
 guide: "{pn} Write a file name"
 },

 onStart: async function ({ message, args, api, event }) {
 const permission = ["61561648169981"];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage("🔥Bâtards 💘, 𝕚𝕟𝕕𝕚𝕘𝕟𝕖 𝕥'𝕒 𝕞ê𝕞𝕖 𝕡𝕒𝕤 𝕝'𝕒𝕦𝕥𝕠𝕣𝕚𝕤𝕒𝕥𝕚𝕠𝕟 𝕕'𝕦𝕥𝕚𝕝𝕚𝕤𝕖𝕣 𝕔𝕖𝕥𝕥𝕖 𝕔𝕞𝕕 , 𝕥'𝕒 𝕡𝕒𝕤 𝕕𝕦 𝕤𝕥𝕪𝕝𝕖 𝕘𝕒𝕞𝕚𝕟 🇫🇷🔥", event.threadID, event.messageID);

 }

 const fileName = args[0];
 if (!fileName) {
 return api.sendMessage("?", event.threadID, event.messageID);
 }

 const filePath = __dirname + `/${fileName}.js`;
 if (!fs.existsSync(filePath)) {
 return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
 }

 const fileContent = fs.readFileSync(filePath, 'utf8');
 api.sendMessage({ body: fileContent }, event.threadID);
 }
};
