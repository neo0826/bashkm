const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const couple = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "couple",
  aliases: [],
  description: "Show gif",
  usage: "couple",
  run: async (client, message, args) => {
   
     let cp = couple.cp[Math.floor((Math.random() * couple.cp.length))];
    
    let gifembed = new Discord.MessageEmbed()
    .setTitle("couple Gif") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(cp);

    message.channel.send(gifembed);

   
  }
};
