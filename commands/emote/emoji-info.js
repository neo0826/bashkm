const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const moment = require("moment");
require("moment-duration-format");
const { color } = require("../../config.json");

module.exports = {
  name: "emojiinfo",
  aliases: ["emoji-info", "ei"],
  description: "Give the information of an emoji",
  usage: "-emojiinfo :emoji:",
  run: async (client, message, args) => {


    const db =require("quick.db");
let color = db.get(`color_${message.author.id}`);
  if(color === null) color = "#EFB9BE";

    let emojiProvided = args[0];


    if(!emojiProvided) return message.reply('Provide an emoji, It has to be from this server.');

    const match = emojiProvided.match(/<:[a-zA-Z0-9_-]+:(\d{18})>/) || emojiProvided.match(/<a:[a-zA-Z0-9_-]+:(\d{18})>/);

    if (!match || !match[1]) {
        return message.reply('Please provide a valid emoji.');
    }

    let emoji = message.guild.emojis.cache.get(match[1]);

    if(!emoji) return message.reply('emoji could not be identified on the server.');
    function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " day" : " days") + " ago";
    };

    let embed  = new Discord.MessageEmbed()
    .setTitle(`Emoji.Information`)
    .setThumbnail(emoji.url)
    .setDescription(`\`<:${emoji.identifier}>\``)
    .addField("Name:", `${emoji.name}`, true)
    .addField("ID:", `${emoji.id}`, true)
    .addField("Added By:", `${await emoji.fetchAuthor().then(user => user.tag).catch(() => {}) || "I can't see who added it"}`, true)
    .addField("Animated:", `${emoji.animated ? 'Yes' : 'No'}`, true)
    .addField("Identifier:", `\`<:${emoji.identifier}>\``, true)
    .addField("Added At:", `${emoji.createdAt.toUTCString().substr(0, 16)} (${checkDays(emoji.createdAt)})`, true)
    .addField("Emoji URL:", `[Click here](${emoji.url})`, true)
    .setColor(color);

      let emoji1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Download Emoji')
      .setURL(emoji.url);

      return message.channel.send(embed ,{
        button: [emoji1],
      });

  }
};
