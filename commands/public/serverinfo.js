const { Client, Message, MessageEmbed, Role } = require('discord.js');
const moment = require('moment')
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "serverinfo",
  aliases: ["server", "si"],
  description: "get server informations",
  usage: "-server",
  run: async (client, message, args) => {
        const filterLevels = {
            DISABLED: 'Off',
            MEMBERS_WITHOUT_ROLES: 'No Role',
            ALL_MEMBERS: 'Everyone'
        };
        const verificationLevels = {
            NONE: 'None',
            LOW: 'Low',
            MEDIUM: 'Medium',
            HIGH: '(╯°□°）╯︵ ┻━┻',
            VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
        };
        const vanityCode = message.guild.vanityURLCode;
        let vanityInvite = `https://discord.gg/${vanityCode}`;
        if (vanityCode === null) vanityInvite = 'No custom URL';
        const members = message.guild.members.cache;
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const embed = new MessageEmbed()
        .setTimestamp()
        .setTitle("Server Information")
        .setColor(color)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField(`Name:`, message.guild.name, true)
        .addField(`ID:`, message.guild.id, true)
        .addField(`Owner:`, message.guild.owner, true)  
        .addField(`Region:`, message.guild.region, true)
        .addField(`Members:`, message.guild.memberCount, true)
        .addField(`Emojis:`, `Total: ${message.guild.emojis.cache.size}\nAnimated: ${message.guild.emojis.cache.filter(emoji => emoji.animated).size}`, true)
        .addField(`Channels:`, `Text: ${message.guild.channels.cache.filter(channel => channel.type === 'text').size}\nVoice: ${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}`, true)        
        .addField(`Roles:`, message.guild.roles.cache.size, true)
        .addField(`Creation:`, `${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).format('LTS')} ${moment(message.guild.createdTimestamp).fromNow()},`)
        .addField(`Boost Tier:`, `${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`)
        .addField(`Boost Count:`, `${message.guild.premiemSubscriptionCount || '0'}`)
        .addField(`Explicit Filter:`, `${filterLevels[message.guild.explicitContentFilter]}`)
        .addField(`Verification Level:`,`${verificationLevels[message.guild.verificationLevel]}`)
        .addField(`Vanity Link:`, `${vanityInvite}`)
        .addField('Presence', [
            '**Other Information**',
            `Integrations: ${message.guild.fetchIntegrations().size ? message.guild.fetchIntegrations().size : 'No integrations'}`,
            `Webhooks: ${message.guild.fetchWebhooks().size || '0'}`,
            '\u200b'
        ], true)
        .addField(`Roles [${roles.length}]:`, roles.length < 15 ? roles.join(', ') : roles.length > 15 ? `${roles.slice(0, 15).join(', ')}\n+${roles.length-15} roles...` : 'None')
        .setAuthor(`${message.guild.name}`)
        .setFooter(`Requester: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

        message.lineReplyNoMention(embed);
}
}
