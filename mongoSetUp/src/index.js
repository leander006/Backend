const express = require("express");

const app = express();

const Comment = require("./model/comment");

const TweetRepository = require("./repository/tweet-repository");

const connect = require("./config/mongoSetup");

app.listen(3000, async (req, res) => {
  await connect();

  const TweetRepo = new TweetRepository();

  const tweet = await TweetRepo.getAll(3, 4);

  //   const comment = await Comment.create({
  //     content: "This is comment1",
  //   });

  //   console.log(tweet);
  //   tweet.comments.push(comment);
  //   tweet.comments.push(comment);
  //   tweet.comments.push(comment);
  //   tweet.comments.push(comment);

  //   await tweet.save();
  console.log(tweet[1].contentWithEmail);

  //   console.log(tweet);

  console.log("runnig on port 3000");
});
