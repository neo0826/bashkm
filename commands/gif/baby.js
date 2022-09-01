const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const baby = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "baby",
  aliases: [],
  description: "Show gif",
  usage: "baby",
  run: async (client, message, args) => {
   
     let by = baby.by[Math.floor((Math.random() * baby.by.length))];
    
    let gifembed = new Discord.MessageEmbed()
    .setTitle("Baby Gif") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(by);

    message.channel.send(gifembed);

   
  }
};
