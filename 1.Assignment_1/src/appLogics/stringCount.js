const stringObj = (str) => {
  let letters = str.replace(/[^a-zA-Z]/g, "").length;
  let symbols = str.replace(/[\w\s]/g, "").length;
  let numerics = str.replace(/[^\d]/g, "").length;
  return {
    letters,
    symbols,
    numerics,
  };
};

module.exports = stringObj;
