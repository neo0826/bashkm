const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const emoji = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "emoji",
  aliases: [],
  description: "Show gif",
  usage: "emoji",
  run: async (client, message, args) => {
   
     let em = emoji.em[Math.floor((Math.random() * emoji.em.length))];
    
    let gifembed = new Discord.MessageEmbed()
    .setTitle("emoji Gif") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(em);

    message.channel.send(gifembed);

   
  }
};
