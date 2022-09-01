const { Client, Message, MessageEmbed } = require('discord.js');
const { color } = require("../../config.json");

module.exports = {
    name: 'dm',
    aliases: ['userdm', 'msg'],
    category: '🚫 Administration',
    memberpermissions: ['ADMINISTRATOR'],
    cooldown: 5,
    description: 'DM a User Using Bot',
    usage: '[COMMAND] + [text]',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, prefix) => {
        if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel
          .send("**You Dont Have** `ADMINISTRATOR` **Permission**")
          .then(msg => msg.delete({ timeout: 5000 }));

        let text = args.slice(1).join(' ');
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])

        if (!user) {
            return message.reply(
                new MessageEmbed()
                    .setColor(color)
                    .setDescription(`** Please Mention a User to Send Message **`)                    
            ).then(msg => msg.delete({ timeout: 3000 }))
        }

        if (!text) {
            message.channel.send(
                new MessageEmbed()
                    .setColor(color)
                    .setDescription(`** Please Write  a Message to Send User **`)              
            ).then(msg => msg.delete({ timeout: 3000 }))
        }       

        user.send(text).catch(e => {
            if (!e) {
                return message.reply(
                    new MessageEmbed()
                        .setColor(color)
                        .setDescription(e)                        
                ).then(msg => msg.delete({ timeout: 3000 }))
            } else {
                message.channel.send(
                    new MessageEmbed()
                        .setColor(color)
                        .setDescription(`Message SuccessFully Sent to <@${user.id}>`)                       
                ).then(msg => msg.delete({ timeout: 3000 }))
            }
        })
    }
}
