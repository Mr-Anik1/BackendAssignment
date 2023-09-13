const { errors } = require("../../../../errors");
const { User } = require("../../../../models");

const checkOwnership = async ({ resourceId, userId }) => {
  try {
    // Find user with id
    const user = await User.findOne({ _id: resourceId });

    // If user doesn't exist then throw an error
    if (!user) {
      throw new errors.NotFoundError(`Resource doesn't exist`);
    }

    // If user id is match to userId then return true
    if (user.id === userId) {
      return true;
    }

    return false;
  } catch (err) {
    if (err.message) {
      console.log(`[CHECK_OWNERSHIP]: ${err.message}`);
    }

    throw new errors.NotFoundError(`Resource doesn't exist`);
  }
};

module.exports = { checkOwnership };
