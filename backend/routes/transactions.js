const express = require('express');
const {createTransaction,getTransactions,deleteTransactions} = require('../controllers/transactionController');

const router = express.Router();
const transactionController = require('../controllers/transactionController');

// define crud routes

// /v1/transactions  - GET (get all transactions)
router.get("/",getTransactions);
// /v1/transaction/<transactionId>  - GET (get current transaction)
// /v1/transaction/<transactionId>  - PUT/PATCH (get all transactions)
// /v1/transaction/<transactionId>  - DELETE (get all transactions)
router.delete("/:id",deleteTransactions);
// /v1/transaction  - POST (get all transactions)
router.post("/",createTransaction);


// specials

// post api for transactions -> learning curve 




module.exports = router;
