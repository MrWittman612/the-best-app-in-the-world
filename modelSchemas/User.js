const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserModelSchema = new Schema({
  name: String,
  email: String,
  password: String,
  avatar: String,
  date: Date,
});

UserModelSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const hash = await bcrypt.hash(this.password, 8);
    this.password = hash;
    return next();
  } catch (err) {
    return next(err);
  }
});

UserModelSchema.methods.checkPassword = async function checkPassword(password) {
  const passwordHash = this.password;
  try {
    return await bcrypt.compare(password, passwordHash);
  } catch (err) {
    return err;
  }
};
// Compile model from schema
module.exports = UserModel = mongoose.model('UserModel', UserModelSchema);
