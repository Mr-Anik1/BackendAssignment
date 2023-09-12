// All middlewares have been imported
const { applyMiddleware } = require("./applyMiddleware");
const errorMiddleware = require("./error");

// All middlewares have been exported
module.exports = { applyMiddleware, errorMiddleware };
