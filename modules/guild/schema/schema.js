const mongoose = require('mongoose');

/**
 *
 * @returns {Model<Document>}
 */
module.exports = () => {
    const guildSchema = new mongoose.Schema({
        guildId: String,
        name: String,
        description: String,
        prefix: String,
    });

    return mongoose.model('guilds', guildSchema);
}