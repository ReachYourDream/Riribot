const mongoose = require('mongoose');

const guildModel = require('../schema/schema');

const {
  DB_URI
} = process.env;

const guildConstructor = guildModel();

/**
 *
 * @param guild
 * @returns {Promise<Mongoose>}
 */
module.exports.insert = (guild) => {
  const db = mongoose.connect(DB_URI, {useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return db.then(() => {
    const newGuild = new guildConstructor({
      _id: guild.guildId,
      name: guild.name,
      description: guild.description,
      prefix:  guild.prefix || '',
    });
    console.log('nugild', newGuild);
    return newGuild.save();
  });
}
/**
 *
 * @param query
 * @returns Promise<Guild>
 */
module.exports.find = (query) => {
  const db = mongoose.connect(DB_URI, {useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return guildConstructor.find(query).exec();
}