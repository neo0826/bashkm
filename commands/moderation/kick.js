const { Client, Message, MessageEmbed } = require('discord.js');
const { color } = require('../../config.json');

module.exports = {
    name: 'kick',
    description: 'kick a user from the guild',
    usage: 'kick [user] [reason]',
    category: '🔨 moderation', 
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.guild.me.permissions.has("BAN_MEMBERS")){
            return message.reply("I Don't Have Permission To kick Members!")
        }
        if(!message.member.permissions.has("BAN_MEMBERS")){
            return message.reply("You Dont Have Permission To kick Members!")
        }
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let reason = args.slice(1).join(" ")

        if(!target){
            return message.reply("Please Mention A User")
        }
        if(target === message.guild.owner){
            return message.reply("What? You Can't kick Owner!")
        }
        if(target === message.author){
            return message.reply("I Will kick You Sometimes😂")
        }
        if(target.bannable){
            let embed = new MessageEmbed()
            .setTitle("Succesffuly✅")
            .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
            .addField("Member:", `${target}`)
            .addField("Reason:", `**${reason || "Not provided"}**`)
            .addField("Author:", `<@${message.author.id}>`)
            .setColor(color)
            .setFooter("kicked")

            message.channel.send(embed)
            target.kick()
        } else {
            return message.reply("Please Check My Role, Or Make My Role Higher Than Everyone.")
        }
    }
}
