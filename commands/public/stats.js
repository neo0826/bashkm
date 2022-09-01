const fs = require("fs");
const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord-buttons");
const ms = require('ms');
const moment = require("moment"); 
require("moment-duration-format"); 
const os = require('os') 
const si = require('systeminformation'); 
const { color } = require("../../config.json");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "stats",
  aliases: ["botinfo"],
  description: "Show informations about me",
  usage: "-stats",
  run: async (client, message, args) => {


 const created = moment(client.user.createdAt).format("YYYY-MM-DD");

const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]"); 

const cpu = await si.cpu(); 



const stats = new Discord.MessageEmbed() 
.setColor(color) 
.setThumbnail(client.user.displayAvatarURL()) 
.setTitle("Statistics - 📊")
.setDescription(`Servers: **${client.guilds.cache.size}**\nUsers: **${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}**\nBot Id: **${client.user.id}**\nCommands Count: **${client.commands.size}**\nBot Created At: **${created}**\nPing: **${Math.round(client.ws.ping)}**ms\nUptime: **${duration1}**\n\nTotal Memory: **${(os.totalmem() / 1024 / 1024).toFixed(2)}** Mbps\nFree Memory: **${(os.freemem() / 1024 / 1024).toFixed(2)}** Mbps\nHeap Total: **${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)}** Mbps\nHeap Usage: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}** Mbps`)
.addField("Owner || Developer:", `**@Matheros#2989**`)

      let button1 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.gg/Hsntpzvb') 
       .setLabel('Support Server')


      let row1 = new MessageActionRow()
      .addComponents(button1)

   return message.channel.send(stats,row1);
    }
}
