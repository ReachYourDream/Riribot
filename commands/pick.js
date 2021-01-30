const _ = require('lodash');
const randomInt = require('../utils/randomInt');

/**
 * Returning one item from item selection from args
 * @author ReachYourDream
 * @param {Object<Discord.js>} client
 * @param {Object<Message>} message
 * @param {Arrays<String>} args - Item Selection
 * @returns {Promise<void>}
 */
module.exports.run = async (client, message, args) => {
  const choiceIndex = randomInt(0,_.size(args)-1);
  const choice = args[choiceIndex];
  const contents = `The wise wizard says that you should pick: ${choice}`;
  await message.channel.send(contents);
}
