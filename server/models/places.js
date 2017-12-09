var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  name: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    default: ""
  },
  latitude: {
    type: String,
    default: ""
  },
  longitude: {
    type: String,
    default: ""
  },
  category: {
    type: String,
    default: ""
  },
  rating: {
    type: Number,
    default: 0
  }
});
module.exports = mongoose.model("Places", placeSchema);
