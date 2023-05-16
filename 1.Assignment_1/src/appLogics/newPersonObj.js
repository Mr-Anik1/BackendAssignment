const { faker } = require("@faker-js/faker");

const newPerson = (arr) => {
  const personObj = {};
  const properties = [
    "firstName",
    "lastName",
    "email",
    "avatar",
    "age",
    "address",
  ];

  arr.forEach((prop) => {
    if (properties.includes(prop)) {
      if (prop === "firstName") {
        personObj[prop] = faker.person.firstName();
      } else if (prop === "lastName") {
        personObj[prop] = faker.person.lastName();
      } else if (prop === "email") {
        personObj[prop] = faker.internet.email();
      } else if (prop === "avatar") {
        personObj[prop] = faker.image.avatar();
      } else if (prop === "age") {
        personObj[prop] = faker.number.int({ min: 13, max: 70 });
      } else if (prop === "address") {
        personObj[
          prop
        ] = `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`;
      }
    }
  });

  return personObj;
};

module.exports = newPerson;
