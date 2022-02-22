const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please add a plan name'],
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'please add a plan price'],
    default: 0,
  },
  earingPercentage: {
    type: Number,
    required: [true, 'please add a earning percentage'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Plan', PlanSchema);
