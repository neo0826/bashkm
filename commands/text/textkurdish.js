const Discord = require("discord.js");
const kurdish = require("../../JSON/tx.json")

module.exports = {
  name: "textkurdish",
  aliases: ["textKurdish", "tk"],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {

 let kr = kurdish.kr[Math.floor((Math.random() * kurdish.kr.length))];

    message.channel.send(kr).then(message => {
			message.react('🥺').then(r => {
				message.react('🖤');
           });
          });
      }
}
