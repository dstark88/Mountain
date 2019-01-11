var express = require("express");

var router = express.Router();

var moutain = require("../models/mountain.js");

router.get("/", function(req, res) {
    moutain.all(function(data) {
        var hbsOject = {
            moutains: data
        };
        console.log("from moutains_controllers.js", hbsOject);
        res.render("index", hbsOject);
    });
});

router.post("/api/moutains", function(req, res) {
    moutain.create([
        "moutain_name", "shred"
    ], [
        req.body.moutain_name, req.body.shred
    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/moutains/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    moutain.update({
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

module.exports = router;