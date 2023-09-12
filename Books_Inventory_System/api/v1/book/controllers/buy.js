const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { bookServicesV1 } = require("../../../../lib/v1/book");

const buy = asyncHandler(async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: await bookServicesV1.buy() });
});

module.exports = { buy };
