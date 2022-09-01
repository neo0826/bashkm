const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { lineReply } = require("discord-reply");
const { color } = require("../../config.json");

module.exports = {
  name: "bans",
  aliases: ["banlist"],
  description: "server ban list",
  usage: "bans",
  run: async (client, message, args) => {

	if(!message.member.hasPermission("ADMINISTRATOR")) return message.lineReplyNoMention(new MessageEmbed()
	.setColor(color)
	.setDescription(`**You Need** \`ADMINISTRATOR\` **Permission To Use This Command!**`)
	.setFooter(`${message.author.tag}`, message.author.avatarURL()))
if (!message.channel.guild) return;
		message.channel;
		message.guild.fetchBans().then(bans =>
message.lineReplyNoMention(new MessageEmbed()
 .setAuthor(message.guild.name, message.guild.iconURL())
 .setColor(color)
 .addField("Found:", `\`${bans.size}\` Member Banned`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL()))).catch(console.error);
     }
 };
