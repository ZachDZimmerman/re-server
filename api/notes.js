var express = require("express");
var router = express.Router();
var queries = require("../db/queries");

router.get("/", function(req, res, next) {
    if (req.query.query) {
        queries.searchingNotes(req.query.query).then(function(data) {
            res.json({ data:data});
        });
    } else {
        next();
    }
});

router.get("/", function(req, res, next) {
    queries.getAllNotes().then(function(notes) {
        res.json({notes});
    }).catch(function(error) {
        next(error);
    });
});

router.post("/", function(req, res, next) {
    queries.addNote(req.body).then(function(note) {
        res.json({ note });
    }).catch(function(error) {
        next(error);
    });
});

router.get("/:id", function(req, res, next) {
    queries.getOneNote(req.params.id).then(function(data) {
        res.json({ data });
    }).catch(function(error) {
        next(error);
    });
});



module.exports = router;
