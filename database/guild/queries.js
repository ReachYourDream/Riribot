const mongoose = require('mongoose');

const guildModel = require('./schema');

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
      guildId: guild.id,
      name: guild.name,
      description: guild.description,
      prefix:  guild.prefix || '',
    });

    return newGuild.save();
  });
}

module.exports.find = (query) => {
  const db = mongoose.connect(DB_URI, {useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db.next(() => {
    return guildConstructor.find(query);
  });
}