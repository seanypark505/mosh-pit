const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  spotifyId: { type: String, unique: true },
  email: { type: String, unique: true },
  name: String,
  accessToken: String,
  refreshToken: String,
});

mongoose.model('users', userSchema);
