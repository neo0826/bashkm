const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  category: "fun",
  description: "Make the bot say something",
  usage: "say <anything>",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

    if(!args[0]) return message.reply(`Please say a mesage!`)
    
        message.delete()
    message.channel.send(args.join(" "))
  },
};
