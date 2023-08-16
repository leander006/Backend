const mongoose = require("mongoose");

const tweetScheme = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Tweet = mongoose.models.Tweet || mongoose.model("Tweet", tweetScheme);

module.exports = Tweet;
