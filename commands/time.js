const moment = require('moment');

/**
 * Returning the date and time where server is running
 * @author ReachYourDream
 * @param {Object<Discord.js>} client
 * @param {Object<Message>} message
 * @param {Arrays<String>} args
 * @returns {Promise<void>}
 */
module.exports.run = async (client, message, args) => {
  const datetime = moment().toDate();
  const contents = `Server time is: ${datetime}`;
  await message.channel.send(contents);
}
