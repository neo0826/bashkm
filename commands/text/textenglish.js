const Discord = require("discord.js");
const english = require("../../JSON/tx.json")

module.exports = {
  name: "textenglish",
  aliases: ["textEnglish", "te", "ten"],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {


 let en = english.en[Math.floor((Math.random() * english.en.length))];

    message.channel.send(en).then(message => {
			message.react('🥺').then(r => {
				message.react('🖤');
           });
          });
      }
}
