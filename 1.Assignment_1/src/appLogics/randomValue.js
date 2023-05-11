const random = (start, end) => {
  const randomAge = Math.floor(Math.random() * (end - start + 1)) + start;
  return randomAge;
};

module.exports = random;
