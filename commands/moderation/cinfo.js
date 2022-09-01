const { MessageEmbed } = require('discord.js');
const { lineReply } = require("discord-reply");
const { color } = require("../../config.json");

module.exports = {
  name: "channelinfo",
  aliases: ["cinfo"],
  run: async (client, message, args) => {
         
	let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find(Ch => Ch.name.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.channels.cache.find(Ch => Ch.name.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.channels.cache.find(Ch => Ch.name.toLowerCase().startsWith(args.join(" ").toLowerCase())) || message.guild.channels.cache.find(Ch => Ch.name.toLowerCase().endsWith(args.join(" ").toLowerCase()));
if(!channel || channel.type === "unknown" || !args.length) return message.lineReplyNoMention("**Please Mention A Valid Channel Or** `Name` **Or** `ID` **Or Channel** `Starts/Ends` **With Or Channel Includes!**");

if(channel.type === "voice") {
  
const channelEmbed = new MessageEmbed()
.setThumbnail(message.guild.iconURL)
.setDescription([
`**❯ Name:** ${channel.name}`, 
`**❯ ID:** ${channel.id}`, 
`**❯ Type:** ${channel.type.charAt(0).toUpperCase() + channel.type.slice(1)}`, 
`**❯ Creation Date:** ${channel.createdAt.toDateString()}`, 
`**❯ Category:** ${channel.parent.name || 'None'}`, 
`**❯ Bitrate:** ${channel.bitrate}`, 
`**❯ User Limit:** ${channel.userLimit === 0 ? "Unlimited" : channel.userLimit}`, 
`**❯ Full:** ${channel.full ? 'Yes' : 'No' }`, 
`**❯ Members:** ${channel.members ? channel.members.array().length : 0}
${channel.members ? channel.members.array().join(" **|** ") : 'None'}`
]) 
.setTimestamp()
.setColor(color)
.setFooter(`Requester: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
message.lineReplyNoMention(`**Information About** <#${channel.id}> **Channel**`,channelEmbed)
}
else if((channel.type === "text") || (channel.type === "news") || (channel.type === "store")) {
const channelEmbed = new MessageEmbed()
.setThumbnail(message.guild.iconURL)
.setDescription([
`**❯ Name:** ${channel.name}`, 
`**❯ ID:** ${channel.id}`, 
`**❯ Type:** ${channel.type.charAt(0).toUpperCase() + channel.type.slice(1)}`, 
`**❯ Creation Date:** ${channel.createdAt.toDateString()}`, 
`**❯ NSFW:** ${channel.nsfw ? 'Yes' : 'No'}`, 
`**❯ Category:** ${channel.parent ? channel.parent.name : 'None'}`, 
`**❯ Topic:** \n${channel.topic ? channel.topic.length > 200 ? `${channel.topic.slice(0, 200)}...` : channel.topic : "None"}`
]) 
.setColor(color) 
.setTimestamp() 
.setFooter(`Requester: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
message.lineReplyNoMention(`**Information About** <#${channel.id}> **Channel**`,channelEmbed)

}
else {
const channelEmbed = new MessageEmbed()
.setThumbnail(message.guild.iconURL)
.setDescription([
`**❯ Name:** ${channel.name}`, 
`**❯ ID:** ${channel.id}`, 
`**❯ Type:** ${channel.type.charAt(0).toUpperCase() + channel.type.slice(1)}`, 
`**❯ Creation Date:** ${channel.createdAt.toDateString()}`, 
`**❯ Channels**: ${channel.children ? channel.children.array().length : 0}
${channel.children ? channel.children.array().join(" **|** ") : 'None'}`
		])
.setTimestamp()
.setColor(color)
.setFooter(`Requester: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
	message.lineReplyNoMention(`**Information About** <#${channel.id}> **Channel**`,channelEmbed)
}
	}
}
