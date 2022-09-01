const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");
const color = "#303136";

module.exports = {
  name: "channels",
  aliases: ["chs"],
  description: "guild channels",
  usage: "channels",
  run: async (client, message, args) => {

        const channels = message.guild.channels.cache;
        const voiceChannels = channels.filter((channel) => channel.type === "voice").map((channel) => channel.name).join(", ");
        const textChannels = channels.filter((channel) => channel.type === "text").map((channel) => `<#${channel.id}>`).join(", ");

        const embed = new MessageEmbed()
            .setColor(color)
            .setTitle(`${message.guild.name}'s Channels`)
            .addField("Voice Channels:", voiceChannels)
            .addField("Text Channels:", textChannels)
            .setFooter(message.author.username)
            .setTimestamp();


        message.lineReplyNoMention(embed);
    }
};
