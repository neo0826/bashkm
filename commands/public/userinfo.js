const { Client, Message, MessageEmbed } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const { color } = require("../../config.json");

module.exports = {
  name: "userinfo",
  aliases: ["whois", "who"],
  description: "Information about a user",
  usage: "[@user]",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let userStatm;
    let userStat = user.presence.status;

    let userRoles = user.roles.cache
      .map((x) => x)
      .filter((z) => z.name !== "@everyone");

    if (userRoles.length > 100) {
      userRoles = "More than 100";
    }

    let safe = message.author.createdTimestamp;

    if (safe > 604800017) {
      safe = "`Not Suspicious`";
    } else {
      safe = "`Suspicious`";
    }

    if (userStat === "online") userStatm = `Online`;
    if (userStat === "offline") userStatm = `Offline`;
    if (userStat === "idle") userStatm = `Idle`;
    if (userStat === "dnd")
      userStatm = `Do not disturb`;

    let nitroBadge = user.user.avatarURL({ dynamic: true });
    let flags = user.user.flags.toArray().join(``);

    if (!flags) {
      flags = "None";
    }

    flags = flags.replace(
      "HOUSE_BRAVERY",
      "• `HypeSquad Bravery`"
    );
    flags = flags.replace(
      "EARLY_SUPPORTER",
      "• `Early Supporter`"
    );
    flags = flags.replace(
      "VERIFIED_DEVELOPER",
      "• `Verified Bot Developer`"
    );
    flags = flags.replace(
      "EARLY_VERIFIED_DEVELOPER",
      "• `Verified Bot Developer`"
    );
    flags = flags.replace(
      "HOUSE_BRILLIANCE",
      "• `HypeSquad Brilliance`"
    );
    flags = flags.replace(
      "HOUSE_BALANCE",
      "• `HypeSquad Balance`"
    );
    flags = flags.replace(
      "DISCORD_PARTNER",
      "• `Partner`"
    );
    flags = flags.replace(
      "HYPESQUAD_EVENTS",
      "• Hypesquad Events`"
    );
    flags = flags.replace(
      "DISCORD_CLASSIC",
      "• Discord.Classic`"
    );

    if (nitroBadge.includes("gif")) {
      flags =
        flags +
        `
      •\`Nitro\``;
    }

    let stat = user.presence.activities[0];
    let custom;

    if (user.presence.activities.some((r) => r.name === "Spotify")) {
      custom = "Listening to Spotify";
    } else if (stat && stat.name !== "Custom Status") {
      custom = stat.name;
    } else {
      custom = "None";
    }

    if (
      user.presence.activities.some((r) => r.name !== "Spotify") &&
      stat &&
      stat.state !== null
    ) {
      stat = stat.state;
    } else {
      stat = "None";
    }

    const embeddd = new MessageEmbed()
      .setColor(color)
      .setAuthor(
        message.author.tag,
        message.author.avatarURL({ dynamic: true })
      )
      .setDescription(
        `__**User Info**__
      **•** \`ID:\` **${user.id}**
      **•** \`Profile:\` **${user}**
      **•** \`Bot:\` **${user.user.bot ? "Yes" : "No"}**
      **•** \`Creation:\` **${moment(user.user.createdAt).format(
    "MMMM Do YYYY, H:mm:ss a"
  )}**
      __**Member Info**__
      **•** \`Nickname:\` **${user.displayName ? user.displayName : "yok"} **
      **•** \`Joined:\` **${moment(user.joinedAt).format(
    "MMMM Do YYYY, H:mm:ss a"
  )}**
      **•** \`Activity:\` **${custom}**
      __**Roles:**__
      ${userRoles}
      __**Badge Information**__
      ${flags} 
      
      __**Suspicious Check**__
      • ${safe}`
      )
      .setThumbnail(user.user.avatarURL({ dynamic: true }))
      .setTimestamp();

    message.channel.send(embeddd);
  },
};
