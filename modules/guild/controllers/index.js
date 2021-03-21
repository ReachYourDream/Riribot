const Bluebird = require('bluebird');

const guildQueries = require('../queries/queries');

/**
 *
 * @param id
 * @returns {Promise<Guild>}
 */
module.exports.findById = (id) => {
  const query = {
  _id: id,
  };
  console.log('gueri', query);
  return guildQueries.find(query)
    .then(res => {
      if(res) {
        return res;
      } else {
        return null;
      }
    });
}

/**
 *
 * @param data
 */
module.exports.saveGuild = (data) => {
  return guildQueries.insert(data);
}