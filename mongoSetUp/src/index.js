const express = require("express");

const app = express();

const Tweet = require("./model/tweet");

const TweetRepository = require("./repository/tweet-repository");

const connect = require("./config/mongoSetup");

app.listen(3000, async (req, res) => {
  await connect();

  const TweetRepo = new TweetRepository();
  //   const tweet = await TweetRepo.upadte("64dc79020fc0a89d3d3dc2e6", {
  //     userEmail: "@gmail.com",
  //   });

  //   console.log(tweet);

  console.log("runnig on port 3000");
});
