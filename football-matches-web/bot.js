const TelegramBot = require('node-telegram-bot-api');

// Вставьте токен вашего бота
const token = '7648117437:AAFnzuIZzNp5FL7p4x9Lnp-Ano6f9eIA_BI';

// Создаем экземпляр бота с polling
const bot = new TelegramBot(token, { polling: true });

// Обрабатываем команду /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  console.log(`Команда /start от пользователя: ${msg.from.username}`);
  bot.sendMessage(chatId, 'Привет! Я ваш бот. Чем могу помочь?');
});

// Логируем все входящие сообщения
bot.on('message', (msg) => {
  console.log(`Получено сообщение: ${msg.text}`);
});

// Обработка ошибок polling
bot.on('polling_error', (error) => {
  console.error('Ошибка polling:', error.message);
});
