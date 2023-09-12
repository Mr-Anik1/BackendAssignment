const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { bookServicesV1 } = require("../../../../lib/v1/book");

const findSingle = asyncHandler(async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ id: req.params.id, msg: await bookServicesV1.findSingle() });
});

module.exports = { findSingle };
