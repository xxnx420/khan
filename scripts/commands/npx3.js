const fs = require("fs");
module.exports.config = {
	name: "Rahad",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Rahad", 
	description: "hihihihi",
prefix: false,
	category: "no prefix",
	usages: "byeall",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bye")==0 || event.body.indexOf("Good bye")==0 || event.body.indexOf("By")==0 ||
event.body.indexOf("by")==0 ||
 event.body.indexOf("Bye")==0) {
		var msg = {
				body: "●●︵🦋💜\n\n🌼☁️__𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞 𝗧𝗿𝘂𝘀𝘁 𝗺𝙚__🤍✨\n\n༎-অভিমান ভাঙাতে একমাত্র সেই জানে >3🍁🍂🙂!!༎-যে ছেড়ে যাওয়ার জন্য নয় থেকে যাওয়ার জন্য আসে >𝟑!-🖇️\n\n𝐒𝐎𝐇𝐀𝐆 𝐊𝐇𝐀𝐍(✷‿✷)",
				attachment: fs.createReadStream(__dirname + `/noprifix/byeall.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
