const { Telegraf } = require("telegraf");
require("dotenv").config({ path: __dirname + "/.env" });
const { message } = require("telegraf/filters");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome To Telegram Bot By Leander"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.hears("who made this bot", (ctx) =>
  ctx.reply("Leander D'silva made this Bot!🥰🥰")
);
bot.hears("How you made this bot", (ctx) =>
  ctx.reply("So I used the telegraf api to create this bot !!")
);

bot.hears("How you made this bot", (ctx) =>
  ctx.reply("So I used the telegraf api to create this bot !!")
);

bot.hears("How you made this bot", (ctx) =>
  ctx.reply("So I used the telegraf api to create this bot !!")
);

bot.hears("How to access this bot", (ctx) => ctx.reply("t.me/knock_the_bot"));

bot.hears("bot", (ctx) => ctx.reply("t.me/knock_the_bot"));

bot.on(message("sticker"), (ctx) => ctx.reply("😍🥰"));

bot.launch();
