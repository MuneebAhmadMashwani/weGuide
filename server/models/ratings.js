var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ratingSchema = new Schema({
  userid: {
    type: String,
    default: ""
  },
  rating: {
    type: Number,
    default: 0
  },
  types: {
    type: Array
  },
  place_id: {
    type: String,
    default: ""
  }
});
module.exports = mongoose.model("Ratings", ratingSchema);
