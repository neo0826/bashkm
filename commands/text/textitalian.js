const Discord = require("discord.js");
const italian = require("../../JSON/tx.json")

module.exports = {
  name: "textitalian",
  aliases: ["TextItalian", "Textitaly", "TEXTITALI", "ti", "til"],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {
	  
 let it = italian.it[Math.floor((Math.random() * italian.it.length))];

    message.channel.send(it).then(message => {
			message.react('🥺').then(r => {
				message.react('🖤');
           });
          });
      }
}
