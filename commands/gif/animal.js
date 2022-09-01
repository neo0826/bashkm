const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const animal = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "animal",
  aliases: [],
  description: "Show gif",
  usage: "animal",
  run: async (client, message, args) => {
   
     let an = animal.an[Math.floor((Math.random() * animal.an.length))];
    
    let gifembed = new Discord.MessageEmbed()
    .setTitle("animal Gif") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(an);

    message.channel.send(gifembed);

   
  }
};
