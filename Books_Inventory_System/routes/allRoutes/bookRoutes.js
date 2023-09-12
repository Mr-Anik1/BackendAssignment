const bookRouter = require("express").Router();
const { bookControllersV1 } = require("../../api/v1/book");

// Routes
bookRouter
  .route("/api/v1/books")
  .get(bookControllersV1.findAll)
  .post(bookControllersV1.create);
bookRouter
  .route("/api/v1/books/:id")
  .get(bookControllersV1.findSingle)
  .patch(bookControllersV1.update)
  .delete(bookControllersV1.remove);
// Buy and Borrow routes
bookRouter.route("/api/v1/books/buy/:id").post(bookControllersV1.buy);
bookRouter.route("/api/v1/books/borrow/:id").post(bookControllersV1.borrow);

module.exports = { bookRouter };
