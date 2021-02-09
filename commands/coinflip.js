const randomInt = require('../utils/randomInt');

module.exports.run = async (client, message, args) => {
  const coinRandom = randomInt(0,1);
  const coinFace = coinRandom ? 'Head' : 'Tail' ;
  await message.channel.send('Coin being tossed.....')
    .then(msg => {
    setTimeout(function() {
      msg.channel.send(`And the result is.....`).then(msgs => {
        setTimeout(function() {
          msgs.channel.send(coinFace)
        }, 2000);
      })
    }, 2000);
  });
  // await message.guild.send('And the result is.....');
  // await message.guild.send(coinFace);
}
