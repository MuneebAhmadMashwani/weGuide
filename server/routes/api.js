var express = require("express");
var router = express.Router();
var Places = require("../models/places");

router.get("/", function(req, res, next) {
  res.send("api works");
});

//Saving Places
router.post("/places", function(req, res, next) {
  console.log(req.body);
  var place = new Places(req.body);
  place.save(function(err, _place) {
    if (err) {
      console.log("Error");
    } else {
      console.log("Saved!");
    }
  });
  res.send("");
});

//getting places from db
router.get("/places", function(req, res, next) {
  Places.find({}, function(err, _place) {
    if (err) {
      console.log("Error");
    } else {
      console.log(_place);
      res.json(_place);
    }
  });
});

module.exports = router;
