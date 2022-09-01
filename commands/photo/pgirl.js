const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const girl = require("../../JSON/ph.json")
const { color } = require("../../config.json");

module.exports = {
  name: "pgirl",
  aliases: [],
  description: "Show Photo",
  usage: "Photo",
  run: async (client, message, args) => {
   
     let gl = girl.gl[Math.floor((Math.random() * girl.gl.length))];
    
    let photoembed = new Discord.MessageEmbed()
    .setTitle("Girl Photo") 
    .setColor(color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(gl);

    message.channel.send(photoembed);

   
  }
};
