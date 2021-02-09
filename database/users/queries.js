const mongoose = require('mongoose');

const UserModel = require('./schema');

/**
 *
 * @param user
 * @returns {Promise<*>}
 */
module.exports.insert = async (user) => {
  await mongoose.connect(process.env.DB_URI,{useNewUrlParser: true, useUnifiedTopology: true});

  const User = UserModel();

  const newUser = new User({
    userId: user.id,
    name: user.name,
    isBot: user.isBot,
  });

  return newUser.save();
}

module.exports.find = async (query) => {
  await mongoose.connect(process.env.DB_URI,{useNewUrlParser: true, useUnifiedTopology: true});

  const User = UserModel();

  return User.find(query);

}