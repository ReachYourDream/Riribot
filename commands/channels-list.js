/**
 *
 * @param client
 * @param {Message} message
 * @param args
 * @returns {Promise<void>}
 */
module.exports.run = async (client, message, args) => {
  message.channel.send("Channel pada server ini adalah:");
  message.guild.channels.cache.forEach((channel) => {
    let type = "";
    switch(channel.type){
      case "voice": {
        type = ":speaker:";
        break;
      }
      case "text": {
        type = ":hash:";
        break;
      }
      default: {
        type = ":arrow_down_small:";
        break;
      }
    }
    message.channel.send(`${type} ${channel.name}`);
  });
}