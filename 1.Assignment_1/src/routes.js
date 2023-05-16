const router = require("express").Router();
const {
  randomController,
  personController,
  stringController,
} = require("./controllers");

//Test: http://localhost:4000/random?start=30&end=50
router.get("/random", randomController);

//Test1: http://localhost:4000/person?arr=["firstName","lastName","email","avatar","age","address"]
//Test2: http://localhost:4000/person?arr=["firstName","email","age","address"]
router.get("/person", personController);

//Test: http://localhost:4000/stringcount?str=stack*learner[!]2017to2023^
router.get("/stringcount", stringController);

module.exports = router;
