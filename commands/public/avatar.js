const db = require("quick.db")
let prefix = "+"
const Discord = require('discord.js')
const { MessageButton , MessageActionRow } = require(`discord-buttons`)
const { color } = require("../../config.json");

module.exports = {
  name: "avatar",
  aliases: ["av"],
  description: "avatar",
  usage: "avatar",
  run: async (client, message, args) => {

 
  const user = message.mentions.users.first()|| client.users.cache.get(message.content.split(' ')[1]) || message.author;

const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription("**Avatar, :comet:. . ⋆**")
    .setAuthor(user.username , user.avatarURL())
    .setImage(user.avatarURL({dynamic : true, size : 1024}))


const u = new MessageButton()
.setStyle(`url`)
.setLabel(`Download Avatar`)
.setURL(`${user.displayAvatarURL({
 size: 2048,
 dynamic: true,
})}`)
const row = new MessageActionRow()
.addComponent([u])
message.channel.send({components: [row], embed: embed})

   }
}
