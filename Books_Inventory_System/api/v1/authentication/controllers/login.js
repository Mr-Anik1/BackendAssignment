const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { authServicesV1 } = require("../../../../lib/v1/authentication");

const login = asyncHandler(async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: await authServicesV1.login() });
});

module.exports = { login };
