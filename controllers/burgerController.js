var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    console.log("Creating new burger" + req.body.name);
    burger.create(["name"], [req.body.name], function(results) {
        res.json({
            id: results.insertId
        });
    });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("Devouring Burger: " + req.params.id)

    burger.update({
        devoured: req.body.devoured
    }, condition, function(results) {
        if (results.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;