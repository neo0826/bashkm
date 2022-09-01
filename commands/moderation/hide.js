const { MessageEmbed } = require("discord.js")
const { color } = require("../../config.json");

module.exports = {
  name: "hide",
  aliases: ["hidechannel"],
  description: "unlocking one of server channels",
  usage: "unlock",
  run: async (client, message, args) => {

        if(!message.member.hasPermission('MANAGE_CHANNELS')) {
            const lockchannelError = new MessageEmbed()
            .setDescription('You don\'t have permission to hide channels!')
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

        if(channel.permissionsFor(message.guild.id).has('VIEW_CHANNEL') === false) {
            const lockchannelError2 = new MessageEmbed()
            .setDescription(`${channel} is already Hided!`)
            .setColor(color)

            return message.channel.send(lockchannelError2)
        }

        channel.updateOverwrite(message.guild.id, { VIEW_CHANNEL: false })

        const embed = new MessageEmbed()
        .setTitle(`Channel Hided!`)
        .addField("Hided:", `${channel}`, true)
        .addField("Hider:", `${message.author.tag}`, true)
        .addField("Reason:", `${reason}`, true)
        .setColor(color)
        .setTimestamp()         
        message.channel.send(embed);

    }
}
