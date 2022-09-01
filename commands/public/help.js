const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { color } = require("../../config.json");

module.exports = {
  name: "help",
  aliases: ["h", "hlp", "hp", "command", "commands"],
  description: "Show Help Command",
  usage: "Help",
  run: async(client, message, args) => {
 
    
    
    let embed = new MessageEmbed()
    .setColor(color)
    .setTitle(`All commands with their category!`)
    .addField("🌏 Public:", `avatar, github, help, invite, ping, serverinfo, stats, userinfo`)
   // .addField("🛠️ Moderations:", `ban, kick, addrole, rmvrole, bans, channels, channelinfo, purge, hide, lock, unlock, nick, unhide, vkick`)
    .addField("⚓ Emotes Manger:", `add-emoji, add-these, emojiinfo, emojis-list, emojistats, emojis, jumbo, remove-emoji, remove-these, rename-emoji`)
  //  .addField("<:funny:1004706922248818728> Actions:", `eightball, clyde, coinflip, corona, cuddle, Dance, deepfry, drake, hug, joke, meme, motivation, dm, pat, say`)
    .addField("🖋️ Texts:", `textarabic, textenglish, textkurdish, textpersian, textturkish, textspanish, textitalian`)
    .addField("🎈 Gifs:", `animal, anime, animeboy, baby, boy, couple, emoji, girl, smoking, sad, neon`)
    .addField("✨ Photos:", `panimal, pbaby, pboy, pemoji, pgirl, panimeboy`)
    .setFooter(`${message.author.username}`)
    .setTimestamp();
    message.react(`<:emoji_118:1004679184569876540>`)
 
      return message.channel.send(embed);
    
  }
};
