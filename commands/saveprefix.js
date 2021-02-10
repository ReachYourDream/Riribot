const _ = require('lodash');

const guildQueries = require('../modules/guild/queries/queries');

/**
 *
 * @param client
 * @param message
 * @param args
 */
module.exports.run = async (client, message, args) => {
  if(_.size(args) === 1) {
    if(_.size(args[0]) !== 1) {
      message.channel.send('prefix hanya boleh satu karakter');
    } else {
      const guildDetail = {
        guildId: message.guild.id,
        name: message.guild.name,
        description: message.guild.description,
        prefix: args[0],
      };
      guildQueries.insert(guildDetail)
        .then((resp) => {
          message.channel.send('prefix: '
            + JSON.stringify(resp));
        });
    }
  } else {
    message.channel.send('prefix hanya boleh satu kata');
  }
}