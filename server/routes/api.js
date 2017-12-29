var express = require("express");
var router = express.Router();
var Places = require("../models/places");
var Ratings = require("../models/ratings");

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
////////////////////////////////////////////
router.post("/reviews", function(req, res, next) {
  Places.findOneAndUpdate(
    { _id: req.body.id },
    {
      $push: {
        "result.reviews": {
          author_name: req.body.author_name,
          language: req.body.language,
          time: req.body.time,
          text: req.body.text,
          relative_time_description: "",
          profile_photo_url: "",
          author_url: "",
          rating: req.body.rating
        }
      }
    },
    function(err, review) {
      if (err) {
        console.log("Reviews Error", err);
      } else {
        console.log("Reviews Saved!", review);
        Places.findOne({ _id: req.body.id }, function(err, mean) {
          if (err) {
            console.log("Mean error", err);
          } else {
            var sum = 0;
            mean.result[0].reviews.forEach(review => {
              sum = sum + review.rating;
            });

            console.log("Mean", sum / mean.result[0].reviews.length);
          }
        });
      }
    }
  );
});
////////////////////////////////////////////
router.post("/ratings", function(req, res, next) {
  console.log(req.body);
  Ratings.findOne({ place_id: req.body.place_id }, function(err, rating) {
    if (err) {
      console.log("Error");
    } else {
      console.log("ratings ", rating);
      console.log("ratings sssssssssssssss", req.body.place_id);
      if (rating) {
        Ratings.update(
          { place_id: req.body.place_id },
          { $set: { rating: req.body.rating } },
          function(err, docs) {
            if (err) {
              console.log("Updation Error", err);
            } else {
              console.log("Updated!");
            }
          }
        );
      } else {
        var rating = new Ratings(req.body);

        rating.save(function(err, _rating) {
          if (err) {
            console.log("Error");
          } else {
            console.log("Saved!");
          }
        });
        res.send("");
      }
    }
  });
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
router.get("/ratings", function(req, res, next) {
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
