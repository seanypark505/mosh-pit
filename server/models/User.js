const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true },
  name: String,
  password: String,
  spotify: {
    id: String,
    token: String,
    displayName: String,
    email: String,
  },
});
