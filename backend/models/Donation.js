const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  donor: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Available',
  },
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
