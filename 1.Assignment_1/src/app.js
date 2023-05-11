const express = require("express");
const random = require("./appLogics/randomValue");
const stringObj = require("./appLogics/stringCount");
const newPerson = require("./appLogics/newPersonObj");
const app = express();

/**
 * @Problem_1_API_Logic
 * Test: http://localhost:4000/random?start=30&end=50
 */
app.get("/random", (req, res) => {
  const start = +req.query.start;
  const end = +req.query.end;

  res.json({
    randomValue: random(start, end),
  });
});

/**
 * @Problem_2_API_Logic
 * Test1: http://localhost:4000/person?arr=["firstName","lastName","email","avatar","age","address"]
 *
 * Test2: http://localhost:4000/person?arr=["firstName","email","age","address"]
 *
 */
app.get("/person", (req, res) => {
  const personArr = JSON.parse(req.query.arr);

  res.json({
    personobj: newPerson(personArr),
  });
});

/**
 * @Problem_3_API_Logic
 * Test: http://localhost:4000/stringcount?str=stack*learner[!]2017to2023^
 */
app.get("/stringcount", (req, res) => {
  const inputString = req.query.str;

  res.json({
    stringObj: stringObj(inputString),
  });
});

app.listen(4000, () => {
  console.log(`Server is listening on port 4000`);
});
