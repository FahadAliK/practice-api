const mongoose = require('mongoose');

const PodSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Pod', PodSchema);
