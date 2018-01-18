var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var parksSchema = new Schema({
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
module.exports = mongoose.model("Parks", parksSchema);
