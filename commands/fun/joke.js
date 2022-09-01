const superagent = require('superagent');
const Discord = require('discord.js');
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "joke",
  aliases: ["jk"],
  description: "joking",
  usage: "joke",
  run: async (client, message, args) => {

        await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
		   .end((err, response) => {
        let jEmbed = new Discord.MessageEmbed()
        .setTitle("Joke")
        .setDescription(response.body.joke)
        .setColor(color);
        message.lineReplyNoMention(jEmbed);
		})
    }
}
