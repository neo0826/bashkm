const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const animeb = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "panimeboy",
  aliases: ["pab"],
  description: "Show anime boys Photo",
  usage: "pab",
  run: async (client, message, args) => {
   
     let ab = animeb.ab[Math.floor((Math.random() * animeb.ab.length))];
    
    let photoembed = new Discord.MessageEmbed()
    .setTitle("Anime Boys Photo") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(ab);

    message.channel.send(photoembed);

   
  }
};
