const { MessageEmbed } = require("discord.js")
const { color } = require("../../config.json");

module.exports = {
  name: "lock",
  aliases: ["lockchannel"],
  description: "locing one of server channels",
  usage: "lock",
  run: async (client, message, args) => {

        if(!message.member.hasPermission('MANAGE_CHANNELS')) {
            const lockchannelError = new MessageEmbed()
            .setDescription('You don\'t have permission to lock channels!')
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

        if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === false) {
            const lockchannelError2 = new MessageEmbed()
            .setDescription(`${channel} is already locked!`)
            .setColor(color)

            return message.channel.send(lockchannelError2)
        }

        channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: false })

        const embed = new MessageEmbed()
        .setTitle(`Channel Locked!`)
        .addField("Locked:", `${channel}`, true)
        .addField("Locker:", `${message.author.tag}`, true)
        .addField("Reason:", `${reason}`, true)
        .setColor(color)
        .setTimestamp()   
        message.react("🔒")      
        message.channel.send(embed);

    }
}
