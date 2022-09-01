const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const anim = require("../../JSON/gf.json")
const { color } = require("../../config.json");

module.exports = {
  name: "animeboy",
  aliases: [],
  description: "Show anime boys gif",
  usage: "animeboy",
  run: async (client, message, args) => {
   
     let ag = anim.ag[Math.floor((Math.random() * anim.ag.length))];
    
    let gifembed = new Discord.MessageEmbed()
    .setTitle("Anime Boys Gif") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(ag);

    message.channel.send(gifembed);

   
  }
};
