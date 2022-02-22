const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  totalInvested: {
    type: Number,
    require: [true, 'Please add total invested amount'],
    default: 0,
  },
  totalPayout: {
    type: Number,
    require: [true, 'Please add total payout amount'],
    default: 0,
  },
  activeInvestments: {
    type: Number,
    require: [true, 'Please add active Investments amount'],
    default: 0,
  },
  earningToday: {
    type: Number,
    require: [true, 'Please add earning today amount'],
    default: 0,
  },
  earningThisMonth: {
    type: Number,
    require: [true, 'Please add earning this month amount'],
    default: 0,
  },
  earningAllTime: {
    type: Number,
    require: [true, 'Please add earning all time amount'],
    default: 0,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);
