const Discord = require("discord.js");
const arabic = require("../../JSON/tx.json")

module.exports = {
  name: "textarabic",
  aliases: ["textArabic", "ta", "tar"],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {


 let ar = arabic.ar[Math.floor((Math.random() * arabic.ar.length))];

    message.channel.send(ar).then(message => {
			message.react('🥺').then(r => {
				message.react('🖤');
           });
          });
      }
}
