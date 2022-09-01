const { Client, Message, MessageEmbed } = require('discord.js');
const { color } = require('../../config.json');

module.exports = {
    name: 'ban',
    description: 'Ban a user from the guild',
    usage: 'ban [user] [reason]',
    category: '🔨 moderation', 
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.guild.me.permissions.has("BAN_MEMBERS")){
            return message.reply("I Don't Have Permission To Ban Members!")
        }
        if(!message.member.permissions.has("BAN_MEMBERS")){
            return message.reply("You Dont Have Permission To Ban Members!")
        }
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let reason = args.slice(1).join(" ")

        if(!target){
            return message.reply("Please Mention A User")
        }
        if(target === message.guild.owner){
            return message.reply("What? You Can't Ban Owner!")
        }
        if(target === message.author){
            return message.reply("I Will Ban You Sometimes")
        }
        if(target.bannable){
            let embed = new MessageEmbed()
            .setTitle("Succesffuly✅")
            .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
            .addField("Member:", `${target}`)
            .addField("Reason:", `**${reason || "Not provided"}**`)
            .addField("Author:", `<@${message.author.id}>`)
            .setColor(color)
            .setFooter("Banned")

            message.channel.send(embed)
            target.ban()
        } else {
            return sendError("Please Check My Role, Or Make My Role Higher Than Everyone.", message.channel)
        }
    }
}
