'use strict';


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}`);
});

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('ODA0NzI1MzE0MzIzNzQyNzUx.YBQg2g.qdoVIAwWlLz9oFlP9X9mkWqonMg');
