const axios = require('axios');
module.exports.config = {
  name: "ocr",
	version: "0.0.2",
	permission: 0,
  prefix: 'true',
	credits: "mesbah",
	description: "imgae to text",
	category: "imgae to text",
	usages: "",
    cooldowns: 5,
};
;module.exports.run = async function ({ api, args, message, event }) {try{const img = event.messageReply.attachments[0].url;const res = await axios.get(`https://mesbah-apis.onrender.com/api/tools/ocr?imageUrl=${encodeURIComponent(img)}`);const txt = res.data.text;message.reply({ body: `${txt}` })} catch (error) {message.reply(error.message);}};
