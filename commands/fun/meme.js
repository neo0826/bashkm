const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { color } = require("../../config.json");
const fetch = require("node-fetch");

module.exports = {
  name: "meme",
  category: 'funny',
  aliases: [],
  description: "Send A Meme!",
  run: async (client, message, args) => {
    //Start    
    fetch("https://meme-api.herokuapp.com/gimme")
    .then(res => res.json())
    .then(json => {
      let embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`${json.title}`)
      .setURL(json.postLink)
      .setImage(json.url)
      .setFooter(`From /r/${json.subreddit}`);

      message.channel.send(embed);
    });

    //End
  }
};
