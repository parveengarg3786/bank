// contactModel.js

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// Setup schema
var verifiedSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  wallet: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  reference: {
    type: String,
    required: true
  },
  role: {
    type: String
    // required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});
var verify = (module.exports = mongoose.model("verify", verifiedSchema));

module.exports.get = function(callback, limit) {
  verify.find(callback).limit(limit);
};
