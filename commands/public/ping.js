const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");
const { color } = require("../../config.json");

module.exports = {
  name: "ping",
  aliases: ["Ping"],
  description: "the Ping value",
  usage: "ping",
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
            .setTitle("Ping Bot")
            .setDescription(`**Ping value**: ${client.ws.ping} ms`)

        if (client.ws.ping < 60) embed.setColor(color)
        else if (client.ws.ping > 60 && client.ws.ping < 120) embed.setColor(color)
        else if (client.ws.ping > 120) embed.setColor(color)


        message.lineReplyNoMention(embed);

    }
};
