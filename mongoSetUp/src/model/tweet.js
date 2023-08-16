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

tweetScheme.virtual("contentWithEmail").get(function process() {
  return `${this.content}\nCreated by:${this.userEmail}`;
});

tweetScheme.pre("save", function (next) {
  console.log("Inside hooks");
  this.content = this.content + " Added from hooks";
  next();
});

const Tweet = mongoose.models.Tweet || mongoose.model("Tweet", tweetScheme);

module.exports = Tweet;
