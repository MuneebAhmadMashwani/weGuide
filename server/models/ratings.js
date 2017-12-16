var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ratingSchema = new Schema({
  userid: {
    type: String,
    default: ""
  },
  place_id: {
    type: String,
    default: ""
  },
  types: {
    type: String,
    default: ""
  },
  rating: {
    type: Number,
    default: 0
  }
});
module.exports = mongoose.model("Ratings", ratingSchema);
