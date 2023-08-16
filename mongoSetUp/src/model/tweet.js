const mongoose = require("mongoose");

const tweetScheme = new mongoose.Schema({
  content: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
  },
});

const Tweet = mongoose.model("Tweet", tweetScheme);

module.exports = Tweet;
