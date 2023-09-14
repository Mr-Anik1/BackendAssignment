const transactionRouter = require("express").Router();
const { transactionControllersV1 } = require("../../api/v1/transaction");

// Routes
transactionRouter
  .route("/api/v1/transactions")
  .get(transactionControllersV1.findAll);
transactionRouter
  .route("/api/v1/transactions/:id")
  .get(transactionControllersV1.findSingle)
  .delete(transactionControllersV1.remove);

module.exports = { transactionRouter };
