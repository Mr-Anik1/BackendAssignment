const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { userServicesV1 } = require("../../../../lib/v1/user");

const update = asyncHandler(async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: await userServicesV1.update() });
});

module.exports = { update };
