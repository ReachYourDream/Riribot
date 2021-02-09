const _ = require('lodash');

/**
 * Returning the avatar picture.
 * @param client {Object<Discord.js>}
 * @param message {Object <Message>}
 * @param args {Arrays<String>}
 * @returns {Promise<void>}
 */
module.exports.run = async (client, message, args) => {
  if (_.size(args) === 0) {
    const authorAvatar = message.author.avatarURL();
    await message.channel.send(authorAvatar);
  } else if (_.size(args) === 1) {
    message.guild.members.fetch(args[0].replace('<@!', '').replace('>',''))
      .then(async (resp) => {
        const targetAvatar = resp.user.avatarURL();
        await message.channel.send(targetAvatar);
      });
  }
}