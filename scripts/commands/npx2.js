const fs = require("fs");
module.exports.config = {
	name: "kalo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Rahad", 
	description: "hihihihi",
prefix: false,
	category: "no prefix",
	usages: "byealll",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🌚")==0 || event.body.indexOf("🌚")==0 || event.body.indexOf("সুন্দর")==0 ||
event.body.indexOf("কালো")==0 ||
 event.body.indexOf("🌝")==0) {
		var msg = {
				body: "┼─┼💙✨🐰\n\n•⎯͢⎯⃝জীবন সঙ্গী কালা-ধলা কুৎসিত আর যাই হক༎•🙂😅༅༎•─\n\n.⎯͢⎯⃝প্রতারক আর চরিত্রহীন না হক༎•─🙃🖤༊🌸🌻\n\n[𝐎𝐖𝐍𝐄𝐑:☞𝐒𝐎𝐇𝐀𝐆 𝐊𝐇𝐀𝐍 (✷‿✷)☜",
				attachment: fs.createReadStream(__dirname + `/noprifix/kosto.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
