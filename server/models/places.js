var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  result: {
    type: Array
  },
  html_attributions: {
    type: Array
  },

  status: {
    type: String
  }
});
module.exports = mongoose.model("Places", placeSchema);
