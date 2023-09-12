const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { bookServicesV1 } = require("../../../../lib/v1/book");

const findAll = asyncHandler(async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: await bookServicesV1.findAll() });
});

module.exports = { findAll };
