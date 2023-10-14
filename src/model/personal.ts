import mongoose from "mongoose";

const personalSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
});

const Personal = mongoose.model(`personal`, personalSchema);
module.exports = Personal;
