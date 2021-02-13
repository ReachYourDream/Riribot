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
  return guildQueries.find(query)
    .then(res => {
      console.log('rez',res);
      if(res) {
        return res;
      } else {
        return null;
      }
    });
}