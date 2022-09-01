const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");


module.exports = {
  name: "hug",
  aliases: ["hugg"],
  description: "gugging people",
  usage: "hug",
  run: async (client, message, args) => {
    const data = await fetch("https://nekos.life/api/hug").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const hugged = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} Hugged ${hugged}`)
      .setFooter(message.author.username)
      .setColor(color)
      .setDescription(`[Click here if the image failed to load.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.lineReplyNoMention(embed);
  },
};
