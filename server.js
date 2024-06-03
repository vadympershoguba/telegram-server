const TelegramBot = require('node-telegram-bot-api');

const token = '7039700796:AAFMj4Ujd9hLfhRelTptmw3nOhz7EhHWeu0';
const webAppUrl = 'https://main--lively-crepe-7258b9.netlify.app/';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  
  if (msg.text === '/start') {
    await bot.sendMessage(chatId, "Click on the button 'Play', in order to start a game.", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Play", web_app: { url: webAppUrl } }]
        ]
      }
    });
  };
});