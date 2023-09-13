const bcrypt = require("bcrypt");

// Plain text password to hash password
const generateHash = async ({ paylod, saltRound = 10 }) => {
  const hashPassword = await bcrypt.hash(paylod, saltRound);

  return hashPassword;
};

// Compare password ~ password valid or not
const compareHash = async ({ plainTextPassword, hashPassword }) => {
  const isMatch = await bcrypt.compare(plainTextPassword, hashPassword);

  return isMatch;
};

module.exports = { generateHash, compareHash };
