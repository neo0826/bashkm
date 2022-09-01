const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const baby = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "pbaby",
  aliases: [],
  description: "Show Photo",
  usage: "Photo",
  run: async (client, message, args) => {
   
     let bb = baby.bb[Math.floor((Math.random() * baby.bb.length))];
    
    let photoembed = new Discord.MessageEmbed()
    .setTitle("Baby Photo") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(bb);

    message.channel.send(photoembed);

   
  }
};
