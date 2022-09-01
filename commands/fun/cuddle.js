const Discord = require("discord.js");
const superagent = require("snekfetch");
const { lineReply } = require("discord-reply");
const { color } = require("../../config.json");

module.exports = {
  name: "cuddle",
  aliases: ["cudle"],
  description: "Cuddle",
  usage: "-cuddle",
  run: async (client, message, args) => {
            const user = message.mentions.users.first();

            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "You must mention someone to cuddle!"
            }})

            superagent.get('https://nekos.life/api/v2/img/cuddle')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " Just got a cuddle from " + message.author.username)
              .setImage(response.body.url)
              .setColor(color)
              .setDescription((user.toString() + " got a cuddle from " + message.author.toString()))
              .setFooter(`this is so cute`)
              .setURL(response.body.url);
          message.lineReplyNoMention(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

        }
       }
