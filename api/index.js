var express = require("express");
var router = express.Router();
var notes = require("./notes");

router.use("/notes", notes);

router.get("/", function(req, res) {
    res.send("Index here!");
});

module.exports = router;
