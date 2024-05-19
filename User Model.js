// Example: User Model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  password: String, // Hashed password
  role: { type: String, enum: ['seller', 'buyer'] }
});

module.exports = mongoose.model('User', userSchema);
