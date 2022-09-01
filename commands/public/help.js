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
    .addField("<:general:1004683188536352828> Generals:", `avatar, github, help, invite, ping, serverinfo, stats, userinfo`)
    .addField("<:moderation:1004708335376941117> Moderations:", `ban, kick, addrole, rmvrole, bans, channels, channelinfo, purge, hide, lock, unlock, nick, unhide, vkick`)
    .addField("<:emote:1004708314938085476> Emotes Manger:", `add-emoji, add-these, emojiinfo, emojis-list, emojistats, emojis, jumbo, remove-emoji, remove-these, rename-emoji`)
    .addField("<:funny:1004706922248818728> Actions:", `eightball, clyde, coinflip, corona, cuddle, Dance, deepfry, drake, hug, joke, meme, motivation, dm, pat, say`)
    .addField("<:text:1004706829722451988> Texts:", `textarabic, textenglish, textkurdish, textpersian, textturkish, textspanish, textitalian`)
    .addField("<:gif:1004684004022308945> Gifs:", `animal, anime, animeboy, baby, boy, couple, emoji, girl, smoking, sad, neon`)
    .addField("<:photo:1004682367962710106> Photos:", `panimal, pbaby, pboy, pemoji, pgirl, panimeboy`)
    .setFooter(`${message.author.username}`)
    .setTimestamp();
    message.react(`<:emoji_118:1004679184569876540>`)
 
      return message.channel.send(embed);
    
  }
};
