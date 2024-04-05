const { json } = require('body-parser');
const Transaction = require('../models/transactions');

// Controller functions for CRUD operations

 const createTransaction=async(req,res,next) =>{
  const newTransaction=new Transaction(req.body)
  
  try{
      const savedTransaction=await newTransaction.save();
      return (res.status(200).json(savedTransaction));

  }catch(err){
      return (res.status(500).json({message:JSON.stringify(err)}));
  }
}

 const getTransactions=async(req,res) =>{
  try{
    const transaction=await Transaction.find();
    return (res.status(200).json(transaction));
  }catch(err){
    return (res.status(500).json("Transaction has been deleted"));
  }
}

const deleteTransactions=async(req,res) =>{
  try{
    await Transaction.findByIdAndDelete(req.params.id);
  }catch(err){
    return (res.status(500).json({message:JSON.stringify(err)}));
  }
}
module.exports = { createTransaction, getTransactions ,deleteTransactions};

