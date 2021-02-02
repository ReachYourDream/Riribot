'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();

//keep alive glitch method
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);




client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandRequired = require(`./commands/${command}.js`);
    if(commandRequired.length <= 0){
      return console.log("Couldn't find command" + command);
    }
    await commandRequired.run(client, message, args).catch(async err => {
      console.log(err);
      const embedError = new Discord.MessageEmbed()
          .addField("I can't find command ", command)
          .setColor('RED');
      await message.channel.send(embedError);
    });
  } catch (err) {
    console.log(err);
    const embedError = new Discord.MessageEmbed()
      .addField("I can't find command ", command)
      .setColor('RED');
    await message.channel.send(embedError);
  }
});

client.login(process.env.token);
