const express = require("express");
const randomAge = require("./appLogics/randomAge");
const stringCount = require("./appLogics/stringCount");
const app = express();

/**
 * @Problem_1_API_Logic
 * Test: http://localhost:4000/random?start=30&end=50
 */
app.get("/random", (req, res) => {
  const start = +req.query.start;
  const end = +req.query.end;

  res.json({
    randomAge: randomAge(start, end),
  });
});

/**
 * @Problem_3_API_Logic
 * Test: http://localhost:4000/stringcount?str=stack*learner[!]2017to2023^
 */
app.get("/stringcount", (req, res) => {
  const inputString = req.query.str;

  res.json({
    stringObj: stringCount(inputString),
  });
});

app.listen(4000, () => {
  console.log(`Server is listening on port 4000`);
});
