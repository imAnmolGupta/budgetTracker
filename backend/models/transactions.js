const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Text is required']
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
