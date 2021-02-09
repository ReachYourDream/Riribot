const mongoose = require('mongoose');

module.exports = () => {
  const userSchema = new mongoose.Schema({
    userId: String,
    name: String,
    isBot: Boolean,
  });

  return mongoose.model('users', userSchema);
}