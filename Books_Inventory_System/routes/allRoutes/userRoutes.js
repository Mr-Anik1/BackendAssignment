const userRouter = require("express").Router();
const { userControllersV1 } = require("../../api/v1/user");

// Routes
userRouter
  .route("/api/v1/users")
  .get(userControllersV1.findAll)
  .post(userControllersV1.create);
userRouter
  .route("/api/v1/users/:id")
  .get(userControllersV1.findSingle)
  .patch(userControllersV1.update)
  .delete(userControllersV1.remove);

module.exports = { userRouter };
