const discord = require("discord.js");
const {MessageEmbed} = require ("discord.js");
const fetch = require ("node-fetch");
const { lineReply } = require("discord-reply");
const { color } = require("../../config.json");

module.exports = {
  name: "Dance",
  aliases: ["dance"],
  description: "are you happy? lets dance!",
  usage: "+dance",
  run: async (client, message, args) => {

        const data = await fetch ("https://miss.perssbest.repl.co/api/v2/dance") .then (res => res.json ());

        let embed = new discord.MessageEmbed()

        .setFooter(message.author.username)
        .setDescription(`${message.author.username} Is Dancing!`)
        .setImage(`${data.image}`)
        .setTitle(`♪ \(^ω^\ )`)
        .setColor(color)
        .setTimestamp()

      message.lineReplyNoMention(embed);

    }

};
