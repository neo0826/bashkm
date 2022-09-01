const Discord = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");
const Extra = require("discord-buttons");
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
 name: "github",
 aliases: [],
 description: "Search for things in github",
 category: "Utility",
 usage: "github (search)",
  run: async (client, message, args) => {
  try {
   if (!args[0])
    return message.lineReply({
     embed: {
      color: 16734039,
      description: "❌ | Please Enter A Github username",
     },
    });
   fetch(`https://api.github.com/users/${args.join("-")}`)
    .then((res) => res.json())
    .then((body) => {
     if (body.message)
      return message.lineReply({
       embed: {
        color: 16734039,
        description: "❌ | 0 Users Found, Please Provide Vaild Username",
       },
      });

     let { login, avatar_url, name, id, html_url, company, public_repos, public_gists, twitter_username, email, followers, following, location, created_at, bio } = body;
     const button = new Extra.MessageButton() // Prettier()
      .setLabel("Check Profile")
      .setStyle("url")
      .setURL(html_url);
     const embed = new Discord.MessageEmbed() // Prettier()
      .setTitle(`${login} Github`, avatar_url)
      .setColor(color)
      .setThumbnail(avatar_url)
      .addField(`Username`, `\`\`\`${login}\`\`\``)
      .addField(`Bio`, `\`\`\`${bio || " Bio not provided"}\`\`\``)
      .addField(`Public Repositories`, `\`\`\`${public_repos || "0"}\`\`\``, true)
      .addField(`Public Gists`, `\`\`\`${public_gists || "0"}\`\`\``, true)
      .addField(`Followers`, `\`\`\`${followers}\`\`\``, true)
      .addField(`Following`, `\`\`\`${following}\`\`\``, true)
      .addField(`Github ID`, `\`\`\`${id}\`\`\``)
      .addField(`Location`, `\`\`\`${location || "Unknown location"}\`\`\``)
      .addField(`E-Mail`, `\`\`\`${email || " No public email provided"}\`\`\``)
      .addField(`Twitter`, `\`\`\`${twitter_username || "None"}\`\`\``)
      .addField(`Company`, `\`\`\`${company || "No company"}\`\`\``)
      .addField(`Account Created`, moment.utc(created_at).format("dddd, MMMM, Do YYYY"))
      .setFooter(
       "Requester: " + `${message.author.username}`,
       message.author.displayAvatarURL({
        dynamic: true,
        format: "png",
        size: 2048,
       })
      )
      .setTimestamp();
     message.channel.send({
      button: button,
      embed: embed,
     });
    });
  } catch (err) {
   message.channel.send({
    embed: {
     color: 16734039,
     description: "Something went wrong... :cry:",
    },
   });
  }
 },
};
