const discord = require("discord.js");
const { color } = require("../../config.json");

module.exports = {
  name: "jumbo", 
  aliases: ["big", "enlarge"], 
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send("Emote is a required argument that is missing.");
    let emo;
     try { emo = client.emojis.cache.get(args[0].match(/(?<=<?a?:?\w{2,32}:)\d{17,19}(?=>?)/gi)[0]) || discord.Util.parseEmoji(args[0]) || client.emojis.cache.find(e => e.name === args[0]) || client.emojis.cache.find(e => e.id === args[0]);
     } catch { 
       return message.channel.send("ERROR")
     }
    if (!emo.name || !emo.id) return message.channel.send("Invalid emote argument");
    const res = `https://cdn.discordapp.com/emojis/${emo.id}.${emo.animated ? "gif" : "png"}`;
    message.channel.send(
      new discord.MessageEmbed() 
      .setImage(res)
      .setTitle(emo.name)
      .setURL(res)
      .setColor(color)
     .setTimestamp() 
     );
}
}
