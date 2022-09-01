const Discord = require("discord.js")
const db = require('quick.db')
const { color } = require('../../config.json')

module.exports = {
    name: 'roleinfo',
    aliases: ['rl'], 
    description: 'gives you the role info',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
      
      var r = message.mentions.roles.first()
      if (!r) return message.channel.send('**Mentions a Role First**')

      var embed = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL({dynamic: true, size: 1024}))
    .setTitle(`${r.name} info`)
    .setColor(color)
    .addField("Server name:", `${message.guild.name}`, true)
    .addField("Name:", `${r.name}`, true)
    .addField("ID:", `${r.id}`, true)
    .addField("Creation:", `${r.createdAt}`, true)
    .addField("Hex Color:", `${r.hexColor}`, true)
    .addField("Members:", `${r.members}`, true)
    .addField("Permissions:", `${r.permissions.toArray().map(p=>`\`${p}\``).join(", ")}`)    
    message.channel.send(embed)

    }
}
