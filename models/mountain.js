// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var mountain = {
  all: function(cb) {
    orm.all("mountains", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("mountains", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("mountains", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (mountains_Controller.js).
module.exports = mountain;