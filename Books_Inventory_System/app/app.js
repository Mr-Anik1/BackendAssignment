const express = require("express");
const { routes } = require("../routes");
const { applyMiddleware, errorMiddleware } = require("../middlewares");

// Create app
const app = express();

/**
 * @Middlewares
 */
applyMiddleware(app);

// Router
app.use(routes.authRouter);
// Error Handler
app.use(errorMiddleware.notFoundHandler);
app.use(errorMiddleware.globalErrorHandler);

// Export app
module.exports = { app };
