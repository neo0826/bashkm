const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const boy = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "pboy",
  aliases: [],
  description: "Show Photo",
  usage: "Photo",
  run: async (client, message, args) => {
   
     let bo = boy.bo[Math.floor((Math.random() * boy.bo.length))];
    
    let photoembed = new Discord.MessageEmbed()
    .setTitle("Boy Photo") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(bo);

    message.channel.send(photoembed);

   
  }
};
