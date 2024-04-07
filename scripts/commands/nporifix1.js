const fs = require("fs");
module.exports = {
  config:{
	name: "npx2",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/8u59EeW.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🤍")==0 || body.indexOf("❤️‍🔥")==0 || body.indexOf("💌")==0 || body.indexOf("🤍")==0 || body.indexOf("🖤")==0 || body.indexOf("I love u")==0 || body.indexOf("I love you")==0 || body.indexOf("valobashi")==0 || body.indexOf("Valobashi")==0 || body.indexOf("🖤")==0) {
		var msg = {
				body: ">🐰✨𝐅𝐞𝐞𝐋 𝐓𝐡𝐢𝐬 𝐋𝐢𝐧𝐞🧡🦋\n— ღ۵ভালোবাসা তাদের জন্য শ্রেষ্ঠ—༅༎💜🌺 💫\n—༅༎-যারা শত বাধার পরেও একজনের প্রতি আসক্ত— ღ۵✨🖤😇🌸\n\n[𝐎𝐖𝐍𝐄𝐑:☞𝐒𝐎𝐇𝐀𝐆 𝐊𝐇𝐀𝐍 (✷‿✷)☜",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
