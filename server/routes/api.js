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

router.post("/ratings", function(req, res, next) {
  console.log(req.body);
  var rating = new Ratings(req.body);
  rating.save(function(err, _place) {
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
  Places.find({}, function(err, _rating) {
    if (err) {
      console.log("Error");
    } else {
      console.log(_rating);
      res.json(_rating);
    }
  });
});
router.get("/rating", function(req, res, next) {
  Ratings.find({}, function(err, _rating) {
    if (err) {
      console.log("Error");
    } else {
      console.log(_rating);
      res.json(_rating);
    }
  });
});

module.exports = router;
