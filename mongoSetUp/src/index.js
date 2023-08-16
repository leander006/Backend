const express = require("express");

const app = express();

const Comment = require("./model/comment");

const TweetRepository = require("./repository/tweet-repository");

const connect = require("./config/mongoSetup");

app.listen(3000, async (req, res) => {
  await connect();

  const TweetRepo = new TweetRepository();

  const tweet = await TweetRepo.getByComments("64dc87780b55555509f22480");

  //   const comment = await Comment.create({
  //     content: "This is comment1",
  //   });

  //   console.log(tweet);
  //   tweet.comments.push(comment);
  //   tweet.comments.push(comment);
  //   tweet.comments.push(comment);
  //   tweet.comments.push(comment);

  //   await tweet.save();
  console.log(tweet);

  //   console.log(tweet);

  console.log("runnig on port 3000");
});
