const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const emoji = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "pemoji",
  aliases: [],
  description: "Show Photo",
  usage: "Photo",
  run: async (client, message, args) => {
   
     let emo = emoji.emo[Math.floor((Math.random() * emoji.emo.length))];
    
    let photoembed = new Discord.MessageEmbed()
    .setTitle("emoji Photo") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(emo);

    message.channel.send(photoembed);

   
  }
};
