const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const { MessageButton } = require("discord-buttons")
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "links",
  aliases: ["link", "invite", "support", "link"],
  description: "links",
  usage: "links",
  run: async (client, message, args) => {
  
      let invite = new MessageButton().setStyle('url').setLabel('Invite Me').setURL('https://discord.com/api/oauth2/authorize?client_id=800442243697213442&permissions=8&scope=bot')
      let support = new MessageButton().setStyle('url').setLabel('Support Server').setURL('https://discord.gg/TbSu5cHU')
     
      const allbuttons = [invite, support]

    let mybuttonsmsg = await message.channel.send({
        embed: new MessageEmbed()
          .setColor(color)
          .setDescription('**<:links:1004711254264397834> Click on The buttons below to redirect**'),
        buttons: allbuttons
      });
  }
}
