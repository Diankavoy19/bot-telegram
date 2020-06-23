const TelegramBot = require('node-telegram-bot-api'); 
const token = '1163222653:AAHnEC3LvQ5kEy7ONYkfmpydw35SEkCFtjE'; 
const bot = new TelegramBot(token, { polling: true }); 
bot.onText(/\/start/,(msg)=>msg.reply('Привіт, але ти додік!'))
bot.onText(/\/help/,(msg)=>msg.reply('Надішли мені стікер!'))
bot.on('sticker', (msg) => msg.reply('👍'))
bot.onText(/\/hears/,('Лютов', (msg) => msg.replyWithPhoto('https://drive.google.com/file/d/1aacKCJ7HaUj-gjJGu4C9M6R2owttVB_M/view')))
bot.onText(/\/hears/,('Драко', (msg) => msg.replyWithPhoto('https://upload.wikimedia.org/wikipedia/ru/thumb/8/82/Draco_Malfoy.jpg/222px-Draco_Malfoy.jpg')))
