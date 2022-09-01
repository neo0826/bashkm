const { MessageEmbed } = require("discord.js")
const { color } = require("../../config.json");

module.exports = {
  name: "unhide",
  aliases: ["unhidechannel"],
  description: "unlocking one of server channels",
  usage: "unlock",
  run: async (client, message, args) => {

        if(!message.member.hasPermission('MANAGE_CHANNELS')) {
            const lockchannelError = new MessageEmbed()
            .setDescription('You don\'t have permission to Unhide channels!')
            .setColor(color)

            return message.channel.send(lockchannelError)
        }

        let channel = message.mentions.channels.first();
        let reason = args.join(" ") || 'Not Specified'

        if(channel) {
            reason = args.join(" ").slice(22) || 'Not Specified'
        } else (
            channel = message.channel
        )

        if(channel.permissionsFor(message.guild.id).has('VIEW_CHANNEL') === true) {
            const lockchannelError2 = new MessageEmbed()
            .setDescription(`${channel} is already UnHided!`)
            .setColor(color)

            return message.channel.send(lockchannelError2)
        }

        channel.updateOverwrite(message.guild.id, { VIEW_CHANNEL: true })

        const embed = new MessageEmbed()
        .setTitle(`Channel UnHided!`)
        .addField("UnHided:", `${channel}`, true)
        .addField("UnHider:", `${message.author.tag}`, true)
        .addField("Reason:", `${reason}`, true)
        .setColor(color)
        .setTimestamp()                
        message.channel.send(embed);

    }
}
