const { Telegraf } = require("telegraf");
require("dotenv").config({ path: __dirname + "/.env" });
const { message } = require("telegraf/filters");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) =>
  ctx.reply(
    "Welcome To Telegram Bot By Leander\nFollowing are the command you can execute\n 1) Hi\n 2) Bot \n 3) Who made this bot\n 4) How you made this bot\n 6) How to access this bot"
  )
);
bot.hears("Hi", (ctx) => ctx.reply("Hey there"));
bot.hears("Who made this bot", (ctx) =>
  ctx.reply("Leander D'silva made this Bot!🥰🥰")
);
bot.hears("How you made this bot", (ctx) =>
  ctx.reply("So I used the telegraf api to create this bot !!")
);
bot.on("text", (ctx) => {
  const defaultMessage =
    "I'm sorry, I don't understand that command. Use /start to see the available commands.";
  ctx.reply(defaultMessage);
});
bot.hears("How you made this bot", (ctx) =>
  ctx.reply("So I used the telegraf api to create this bot !!")
);
bot.hears("How to access this bot", (ctx) => ctx.reply("t.me/knock_the_bot"));

bot.hears("Bot", (ctx) => ctx.reply("t.me/knock_the_bot"));

bot.on(message("sticker"), (ctx) => ctx.reply("😍🥰"));

bot.launch();
