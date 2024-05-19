// Example: Property Model
const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  place: String,
  area: Number,
  bedrooms: Number,
  bathrooms: Number,
  amenities: [String],
  description: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Property', propertySchema);
