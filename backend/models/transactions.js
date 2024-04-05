const mongoose = require('mongoose'); // v2 -> sql 

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


// users 
// id, name, e


// wallet
// id, userId, wallet_balance


// transactions - read about concurrency issues
// id, walletId, userId, transactionType (credit, debit) , amount
