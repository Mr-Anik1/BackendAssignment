const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { transactionServicesV1 } = require("../../../../lib/v1/transaction");

const findAll = asyncHandler(async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: await transactionServicesV1.findAll() });
});

module.exports = { findAll };
