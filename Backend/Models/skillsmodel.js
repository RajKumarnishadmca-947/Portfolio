const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  skills: {
    type:String,
    required: true
  }
});

const Skills = mongoose.model("skills", skillSchema);
module.exports = Skills;