const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { color } = require("../../config.json");
const axios = require("axios");

module.exports = {
  name: "anime",
  aliases: ["am"],
  description: "Gives Random Anime Gif/PP",
  usage: "Gif",
  run: async (client, message, args) => {

        axios.get("https://api.roxza.me/v1/random?type=anime")
            .then(res => {
                let embed = new Discord.MessageEmbed()
                    .setDescription(`**Anime Gif**`)
                    .setColor(color)
                    .setImage(res.data.url)
                    .setFooter(`${message.author.tag}`, message.author.avatarURL)
                   
                     let button1 = new disbut.MessageButton()
                     .setStyle('url')
                     .setLabel('Download') 
                     .setURL(res.data.url);

                   return message.channel.send(embed,{
                   button: [button1],
                    });
                })
    }
};
