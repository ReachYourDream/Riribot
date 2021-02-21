const _ = require('lodash');

const guildQueries = require('../modules/guild/queries/queries');
const guildController = require('../modules/guild/controllers/index');

const {DEFAULT_PREFIX} = process.env;
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
      const guildFound = await guildController.findById(message.guild.id);
      if(!_.isNull(guildFound) && _.size(guildFound)){
        guildFound[0].prefix = args[0];
        return guildFound[0].save()
          .then(() => message.channel.send(`Prefix has been changed into \`${args[0]}\``));
      } else{
        const guildDetail = {
          guildId: message.guild.id,
          name: message.guild.name,
          description: message.guild.description,
          prefix: args[0],
        };
        guildQueries.insert(guildDetail)
          .then((resp) => {
            return message.channel.send(`Prefix has been changed into \`${args[0]}\``);
          });
      }
    }
  } else if(_.size(args) > 1) {
    return message.channel.send('Prefix only allowed by one character');
  } else if(_.size(args) === 0) {
    const guildFound = await guildController.findById(message.guild.id);
    const prefix =  _.get(guildFound, '[0].prefix', DEFAULT_PREFIX);
    return message.channel.send(`Prefix for this channel is: \`${prefix}\``);
  }
}