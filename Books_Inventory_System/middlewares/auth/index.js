// All authentication and authorization middleware has been imported
const { authenticate } = require("./authenticate");
const { authorize } = require("./authorize");
const { ownership } = require("./ownership");

// All authentication and authorization middleware has been exported
module.exports = { authenticate, authorize, ownership };
