const mongoose = require("mongoose");
const url = require("url");
const path = require("path");
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const Strategy = require("passport-discord").Strategy;
const ejs = require("ejs");
var fs = require("fs")
const bodyParser = require("body-parser");
const config = require("./config.json")
const app = express();
const MemoryStore = require("memorystore")(session);
const Discord = require("discord.js");
const client = new Discord.Client();
const disbut = require('discord-buttons')
disbut(client)
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const { Database } = require("quickmongo");
const db = require("quick.db")
const db1 = new Database(config.database);
const listener = app.listen(process.env.PORT, () => { console.log("Your app is listening on port " + listener.address().port); });
db1.on("ready", () => { console.log("quickmongo Database connected!") });
mongoose.connect(config.database2 ,{ useNewUrlParser: true, useUnifiedTopology: true });

client.commands = new Discord.Collection();
const Categories = ["moderation", "public", "fun", "gif", "text", "emote", "photo", "owner", "banner"];

Categories.forEach(async function(Category, message) {
fs.readdir(`./commands/${Category}`, (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${Category}/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command | Category : ${Category} | Command : ${commandName}`);
    client.commands.set(commandName, props);
  })
});
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.login(config.TOKEN) 
