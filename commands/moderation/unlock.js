const { MessageEmbed } = require("discord.js")
const { color } = require("../../config.json");

module.exports = {
  name: "unlock",
  aliases: ["unlockchannel"],
  description: "unlocking one of server channels",
  usage: "unlock",
  run: async (client, message, args) => {

        if(!message.member.hasPermission('MANAGE_CHANNELS')) {
            const lockchannelError = new MessageEmbed()
            .setDescription('You don\'t have permission to unlock channels!')
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

        if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true) {
            const lockchannelError2 = new MessageEmbed()
            .setDescription(`${channel} is already Unlocked!`)
            .setColor(color)

            return message.channel.send(lockchannelError2)
        }

        channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: true })

        const embed = new MessageEmbed()
        .setTitle(`Channel UnLocked!`)
        .addField("UnLocked:", `${channel}`, true)
        .addField("UnLocker:", `${message.author.tag}`, true)
        .addField("Reason:", `${reason}`, true)
        .setColor(color)
        .setTimestamp()   
        message.react("🔓")      
        message.channel.send(embed);

    }
}
