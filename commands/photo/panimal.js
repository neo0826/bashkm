const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const animal = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "panimal",
  aliases: [],
  description: "Show Photo",
  usage: "Photo",
  run: async (client, message, args) => {
   
     let an = animal.an[Math.floor((Math.random() * animal.an.length))];
    
    let photoembed = new Discord.MessageEmbed()
    .setTitle("Animal Photo") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(an);

    message.channel.send(photoembed);

   
  }
};
