const express = require("express");
const router = require("./routes");

//Create Express App
const app = express();

//Middleware
app.use(express.json());
app.use(router);

//Error Handling
app.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log(error);
  if (error.status) {
    return res.status(error.status).send(`${error.message}`);
  }
  res.status(500).send("Something Went Wrong");
});

//App listen
app.listen(4000, () => {
  console.log(`Server is listening on port 4000`);
});
