const _ = require('lodash');

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