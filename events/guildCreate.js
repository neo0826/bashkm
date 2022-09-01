const { Client, Guild, MessageEmbed } = require("discord.js")

/**
 * 
 * @param {Client} client 
 * @param {Guild} guild 
 */


module.exports = (client, guild) => {

 let channel = client.channels.cache.get("997071211282567178");
 const joinEmbed = new MessageEmbed()
       .setColor("RANDOM")
       .setTitle("New Server!!")
       .setThumbnail(guild.iconURL())
       .addField(
         "Guild:",
         `i just joined to here **${guild.name}**.\n\nGuild Members: [**${guild.memberCount}**]`,
         true
       )
       .addField(
         "Owner:",
         `${guild.owner}`,
         true
       )
       .addField(
         "Servers:",
         `[${client.guilds.cache.size}]`,
         true
       )
       .setTimestamp() // moment().format('LLL'),
       .setFooter(`Bzhe la xom`);
    channel.send(joinEmbed);

}
