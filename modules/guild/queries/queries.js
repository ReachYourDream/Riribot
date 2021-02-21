const mongoose = require('mongoose');
const Bluebird = require('bluebird');

const guildModel = require('../schema/schema');

const {
  DB_URI
} = process.env;

const guildConstructor = guildModel();

Bluebird.promisifyAll(mongoose);

/**
 *
 * @param guild
 * @returns {Promise<Mongoose>}
 */
module.exports.insert = (guild) => {
  const db = mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
    const newGuild = new guildConstructor({
    _id: guild.guildId,
    name: guild.name,
    description: guild.description,
    prefix:  guild.prefix || '',
  });
  return newGuild.save();
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