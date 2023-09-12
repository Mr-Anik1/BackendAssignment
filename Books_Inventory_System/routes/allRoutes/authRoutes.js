const authRouter = require("express").Router();

// Routes
authRouter.post("/api/v1/auth/register", (req, res) => {
  res.status(200).json({ msg: "Test Ok Hi" });
});

// Export authRouter
module.exports = { authRouter };
