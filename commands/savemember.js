const _ = require('lodash');
const UserQueries = require('../database/users/queries');

module.exports.run = async (client, message, args) => {
  if (_.size(args) === 1) {
    message.guild.members.fetch(args[0].replace('<@!', '').replace('>',''))
      .then(async (resp) => {
        const userDetail = {
          id: resp.id.replace('<@!', '').replace('>',''),
          name: resp.displayName,
          isBot: resp.user.bot,
        };
        await UserQueries.insert(userDetail);
      });
  } else{
    const userDetail = {
      id: message.author.id.replace('<@!', '').replace('>',''),
      name: message.author.name,
      isBot: message.author.bot,
    };
    await UserQueries.insert(userDetail);
    const query = {
      userId: message.author.id.replace('<@!', '').replace('>',''),
    }
    const data =  UserQueries.find(query);
    await message.channel.send('data: ' + JSON.stringify(data));
  }
}