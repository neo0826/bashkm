const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { lineReply } = require("discord-reply");
const { color } = require("../../config.json");

module.exports = {
  name: "addrole",
  aliases: ["giverole"],
  description: "give role to someone",
  usage: "addrole @user @role",
  run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_ROLES")) return message.lineReplyNoMention(
            new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag)
            .setDescription("**You Dont Have The Permissions To Add Roles To Users! - [MANAGE_ROLES]**")
            .setFooter("Error!")
        );
        if (!message.guild.me.permissions.has("MANAGE_ROLES")) return  message.lineReplyNoMention(
            new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag)
            .setDescription(" **I Dont Have The Permissions To Add Roles To Users! - [MANAGE_ROLES]**> ")

        )

        if (!args[0]) return message.lineReplyNoMention(
            new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag)
            .setDescription("**Please Enter A Role!**")

        )

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!rMember) return  message.lineReplyNoMention(
            new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag)
            .setDescription("**Please Enter A User Name!**")

        )
        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return  message.channel.send(
            new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag)
            .setDescription('**Cannot Add Role To This User!**')

        )

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!args[1]) return  message.lineReplyNoMention(
            new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag)
            .setDescription("**Please Enter A Role!**")

        )

        if (!role) return message.lineReplyNoMention(
            new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag)
            .setDescription("**Could Not Find That Role!**")

        )

        if (role.managed) return  message.lineReplyNoMention(
            new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag)
            .setDescription("**Cannot Add That Role To The User!**")

        )
        if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) return  message.lineReplyNoMention(
            new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag)
            .setDescription('**Role Is Currently Higher Than Me Therefore Cannot Add It To The User!**')

        )

        if (rMember.roles.cache.has(role.id)) return  message.lineReplyNoMention(
            new MessageEmbed()
            .setColor(color)
            .setAuthor(message.author.tag)
            .setDescription('**Role Is Currently Higher Than Me Therefore Cannot Add It To The User!**')

        )
        message.channel.send()
        if (!rMember.roles.cache.has(role.id)) await rMember.roles.add(role.id);
      //  var sembed = new MessageEmbed()
            // .setColor(Color)
            // .setAuthor(message.guild.name, message.guild.iconURL())
            // .setDescription(`Role has been added to ${rMember.user.username}`)
           // .setAuthor(rMember.user.username, rMember.user.displayAvatarURL({ dynamic: true }))
           // .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
          //  .setColor("#FFA500")
         //   .setDescription(`${role} Role has been added to ${rMember.user.username} \`Enjoy Dear\``)
         //   .setFooter(`Role added by ${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))
         //   .setTimestamp()

       // message.lineReplyNoMention(sembed).then((msg => {
        //    msg.delete({ timeout: 7000000 })
       // }))

        const embed = new MessageEmbed()
            .setColor(color)
            .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
            .setFooter(message.guild.name, message.guild.iconURL())
            .addField("**Server**", message.guild.name)
            .addField("**Added Role to**", rMember.user.username)
            .addField("**Role Added**", role.name)
            .addField("**Added By**", message.author.username)
            .addField("**Date**", message.createdAt.toLocaleString())
            .setTimestamp();

        message.channel.send(embed)
    }

}
