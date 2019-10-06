const TelegramBot = require("node-telegram-bot-api");
const token = "947939042:AAG8ryLeMuCLsBwZs6Wp5dGUJGXk_JxIZJg";
const simpleChatBot = new TelegramBot(token, { polling: true });

simpleChatBot.on("message", function name(message) {
  simpleChatBot.sendMessage(message.chat.id, "Halo saya Simple Telegram Bot!");
});
