const Discord = require("discord.js");
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
 name: "purge",
 aliases: ["clear"],
 description: "Removes up to 100 messages",
 category: "Moderation",
 usage: "prune <amount>",
 run: async (client, message, args) => {
  try {
   if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) {
    let error = new Discord.MessageEmbed() // Prettier()
     .setColor(color)
     .setDescription("You don't have permission to prune messages!")
     .setFooter(
      "This message will be deleted after 10 seconds",
      message.author.displayAvatarURL({
       dynamic: true,
       format: "png",
       size: 2048,
      })
     );
    message.lineReplyNoMention(error).then((m) =>
     m.delete({
      timeout: 10000,
     })
    );
    return message.delete({
     timeout: 10000,
    });
   }
   if (isNaN(args[0])) {
    let error = new Discord.MessageEmbed() // Prettier()
     .setColor(color)
     .setDescription("Please input a vaild number!")
     .setFooter(
      "This message will be deleted after 10 seconds!",
      message.author.displayAvatarURL({
       dynamic: true,
       format: "png",
       size: 2048,
      })
     );
    message.lineReplyNoMention(error).then((m) =>
     m.delete({
      timeout: 10000,
     })
    );
    return message.delete({
     timeout: 10000,
    });
   }
   if (args[0] > 100) {
    let error = new Discord.MessageEmbed() // Prettier()
     .setColor(color)
     .setDescription("Insert the number less than 100!")
     .setFooter(
      "This message will be deleted after 10 seconds!",
      message.author.displayAvatarURL({
       dynamic: true,
       format: "png",
       size: 2048,
      })
     );
    message.lineReplyNoMention(error).then((m) =>
     m.delete({
      timeout: 10000,
     })
    );
    return message.delete({
     timeout: 10000,
    });
   }
   if (args[0] < 2) {
    let error = new Discord.MessageEmbed() // Prettier()
     .setColor(color)
     .setDescription("Insert the number more than 1!")
     .setFooter(
      "This message will be deleted after 10 seconds!",
      message.author.displayAvatarURL({
       dynamic: true,
       format: "png",
       size: 2048,
      })
     );
   message.lineReplyNoMention(error).then((m) =>
     m.delete({
      timeout: 10000,
     })
    );
    return message.delete({
     timeout: 10000,
    });
   }
   await message.delete();
   await message.channel.bulkDelete(args[0]).then((messages) => {
    let error = new Discord.MessageEmbed() // Prettier()
     .setColor(color)
     .setDescription("Deleted " + `${messages.size}/${args[0]}` + " messages.")
     .setFooter(
      "This message will be deleted after 10 seconds!",
      message.author.displayAvatarURL({
       dynamic: true,
       format: "png",
       size: 2048,
      })
     );
    return message.lineReplyNoMention(error).then((m) =>
     m.delete({
      timeout: 10000,
     })
    );
   });
  } catch (err) {
   message.lineReplyNoMention({
    embed: {
     color: 16734039,
     description: "Something went wrong...",
    },
   });
   console.log(err);
  }
 },
};
