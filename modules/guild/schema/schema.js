const mongoose = require('mongoose');

/**
 *
 * @returns {Model<Document>}
 */
module.exports = () => {
    const guildSchema = new mongoose.Schema({
        _id : String,
        name: String,
        description: String,
        prefix: String,
        channels: [{
            channelId: String,
            channelName: String,
        }],
        pivotChannelId: String,
        targetChannelId: String,
    });

    return mongoose.model('guilds', guildSchema);
}