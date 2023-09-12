const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { transactionServicesV1 } = require("../../../../lib/v1/transaction");

const create = asyncHandler(async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: await transactionServicesV1.create() });
});

module.exports = { create };
