const mongoose = require('mongoose');

const SettingSchema = new mongoose.Schema({
  Trc20: {
    type: [String],
    required: [true, 'Please add a trc20 array.'],
  },
  Erc20: {
    type: [String],
    required: [true, 'Please add a erc20 array.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Setting', SettingSchema);
