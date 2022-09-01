const { Client, Message, MessageEmbed } = require('discord.js');
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "rmvrole",
  aliases: ["removerole"],
  description: "remove role from someone",
  usage: "rmvrole @user @role",
  run: async (client, message, args) => {
        let target = message.mentions.members.first();

        if (!target) return message.channel.send(
            new MessageEmbed()
                .setColor(color)
                .setAuthor(message.author.tag)
                .setDescription('**I am unable to find the user**')

        )

        let rrole = message.mentions.roles.first();

        if (!rrole) return message.channel.send(
            new MessageEmbed()
                .setColor(color)
                .setAuthor(message.author.tag)
                .setDescription('**I am unable to find the role**')

        )

        let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
        let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

        const embed = new MessageEmbed()
            .setAuthor(target.user.username, ticon)
            .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
            .setColor(color)
            .setDescription(`${rrole} role removed from ${target}`)
            .setFooter(`Role removed by ${message.author.username}`, aicon)
            .setTimestamp()

        await message.channel.send(embed).then((msg => {
            msg.delete({ timeout: 7000 })
        }))

        target.roles.remove(rrole)
    }
}
