var express = require("express");

var router = express.Router();

var mountain = require("../models/mountain.js");

router.get("/", function(req, res) {
    mountain.all(function(data) {
        var hbsOject = {
            mountains: data
        };
        console.log("from mountains_controllers.js", hbsOject);
        res.render("index", hbsOject);
    });
});

router.post("/api/mountains", function(req, res) {
    mountain.create([
        "mountain_name", "shred"
    ], [
        req.body.mountain_name, req.body.shred
    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/mountains/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    mountain.update({
        shred: req.body.shred
    }, condition, function(result) {
        if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});

router.delete("/api/mountains/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    mountain.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;