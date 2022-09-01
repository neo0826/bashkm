const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const smo = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "smoking",
  aliases: [],
  description: "Show gif",
  usage: "baby",
  run: async (client, message, args) => {
   
     let sm = smo.sm[Math.floor((Math.random() * smo.sm.length))];
    
    let gifembed = new Discord.MessageEmbed()
    .setTitle("smoking Gif") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(sm);

    message.channel.send(gifembed);

   
  }
};
