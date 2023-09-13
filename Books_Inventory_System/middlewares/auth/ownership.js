const { userServicesV1 } = require("../../lib/v1/user");
const { errors } = require("../../errors");

// ownership function returns another function that is a middleware
const ownership =
  ({ model = "" }) =>
  async (req, res, next) => {
    const {
      params: { id },
      user: { userId },
    } = req;

    try {
      // If model is equal to User Modle
      if (model === "User") {
        const isOwner = await userServicesV1.checkOwnership({
          resourceId: id,
          userId,
        });

        // If isOwner is true then trun to next step
        if (isOwner) {
          return next();
        }
      }

      // Otherwise throw error
      return next(new errors.AuthorizationError("Ownership Failed"));
    } catch (err) {
      next(err);
    }
  };

module.exports = { ownership };
