const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logSchema = new Schema({
  _id:String,
  id: String,
  active : Boolean,
  hesapAdi:String,
  time : Date
});

const Log = mongoose.model("log", logSchema);

module.exports = Log;
