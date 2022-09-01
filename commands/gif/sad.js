const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const sad = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "sad",
  aliases: [],
  description: "Show gif",
  usage: "sad",
  run: async (client, message, args) => {
   
     let sa = sad.sa[Math.floor((Math.random() * sad.sa.length))];
    
    let gifembed = new Discord.MessageEmbed()
    .setTitle("sad Gif") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(sa);

    message.channel.send(gifembed);

   
  }
};
