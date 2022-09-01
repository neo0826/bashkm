const Discord = require("discord.js");
const spanish = require("../../JSON/tx.json")

module.exports = {
  name: "textspanish",
  aliases: ["TextSpanish", "Textspain", "TEXTSPAIN", "ts", "tsp"],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {
	  
 let sp = spanish.sp[Math.floor((Math.random() * spanish.sp.length))];

    message.channel.send(sp).then(message => {
			message.react('🥺').then(r => {
				message.react('🖤');
           });
          });
      }
}
