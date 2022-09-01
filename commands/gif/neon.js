const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const neon = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "neon",
  aliases: [],
  description: "Show gif",
  usage: "neon",
  run: async (client, message, args) => {
   
     let ne = neon.ne[Math.floor((Math.random() * neon.ne.length))];
    
    let gifembed = new Discord.MessageEmbed()
    .setTitle("neon Gif") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(ne);

    message.channel.send(gifembed);

   
  }
};
