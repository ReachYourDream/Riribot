const _ = require('lodash');

const guildController = require('../modules/guild/controllers/index');


module.exports.run = async (client, message, args) => {
  if (_.size(args) === 0) {
    const guildFound = await guildController.findById(message.guild.id);
    if(_.size(guildFound)){
      message.channel.send(`Name: ${guildFound[0].name}\n`
        + `Description: ${guildFound[0].description}\n`
        + `Prefix: ${guildFound[0].prefix}`);
    }
  }
}