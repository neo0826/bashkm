const Discord = require("discord.js");
const perisan = require("../../JSON/tx.json")

module.exports = {
  name: "textpersian",
  aliases: ["textPersian", "Textpersian", "TextPersian", "TEXTPERSIAN", "tp"],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {

 let pr = perisan.pr[Math.floor((Math.random() * perisan.pr.length))];

    message.channel.send(pr).then(message => {
			message.react('🥺').then(r => {
				message.react('🖤');
           });
          });
      }
}
