const random = require("./appLogics/randomValue");
const stringObj = require("./appLogics/stringCount");
const newPerson = require("./appLogics/newPersonObj");

exports.randomController = (req, res) => {
  try {
    const start = +req.query.start;
    const end = +req.query.end;

    //If start and end are false, then it will throw an error.
    if (start && end) {
      res.json({
        randomValue: random(start, end),
      });
    } else {
      throw error;
    }
  } catch {
    const error = new Error("Bad Request");
    error.status = 400;
    throw error;
  }
};

exports.personController = (req, res) => {
  try {
    const personArr = JSON.parse(req.query.arr);

    res.json({
      personobj: newPerson(personArr),
    });
  } catch {
    const error = new Error("Bad Request");
    error.status = 400;
    throw error;
  }
};

exports.stringController = (req, res) => {
  try {
    const inputString = req.query.str;

    res.json({
      stringObj: stringObj(inputString),
    });
  } catch {
    const error = new Error("Bad Request");
    error.status = 400;
    throw error;
  }
};
