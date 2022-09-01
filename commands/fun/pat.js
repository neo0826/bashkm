const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const fetch = require("node-fetch");
const { color } = require("../../config.json");

module.exports = {
  name: "pat",
  aliases: ["patch"],
  description: "pat someone",
  usage: "pat @user",
  run: async (client, message, args) => {

      const data = await fetch("https://nekos.life/api/v2/img/pat").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const patted = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor(color)
      .setTitle(`${message.author.username} Patted ${patted}`)
      .setImage(`${data.url}`)
      .setTimestamp();

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Click here if the image failed to load') 
      .setURL(data.url);

      return message.channel.send(embed,{
        button: [button1],
      });

  }
};
