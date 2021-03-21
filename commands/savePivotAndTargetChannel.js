const _ = require("lodash");

const guildController = require('../modules/guild/controllers');

/**
 *
 * @param client
 * @param {Message} message
 * @param args
 * @returns {Promise<void>}
 */
module.exports.run = async (client, message, args) => {
  if (_.size(args) === 2) {
    const pivotChannelId = args[0];
    const targetChannelId = args[1];
    const guildFound = await guildController.findById(message.guild.id);
    if(!_.isNull(guildFound) && _.size(guildFound)){
      guildFound[0].pivotChannelId = args[0];
      guildFound[0].targetChannelId = args[1];
      let channels = [];
      message.guild.channels.cache.forEach((channelEach) => {
        let type = '';
        if(type !== 'voice' && type !=='text')
          return;
        channels.push({
          channelID: channelEach.id,
          channelName: channelEach.name,
        });
      });
      guildFound[0].channels = channels;
      return guildFound[0].save()
        .then(() => message.channel.send(`Pivot and Target channel has been changed`));
    } else {
      const channels = message.guild.channels.cache.map((channelEach) => ({
        channelId: channelEach.id,
        channelName: channelEach.name,
      }));
      const guildDetail = {
        guildId: message.guild.id,
        name: message.guild.name,
        description: message.guild.description,
        prefix: null,
        channels,
        pivotChannelId: args[0],
        targetChannelId: args[1],
      };
      guildController.saveGuild(guildDetail);
    }
  }
};
