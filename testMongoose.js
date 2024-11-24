const mongoose = require('mongoose');

// Подключение к базе данных
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

// Импортируем модель Exchange
var Exchange = require('./models/exchange.js').Exchange;

// Создаем экземпляр модели и сохраняем его в базе данных
var exchange = new Exchange({
  title: "Биржа работает",
  nick: "WorkingExchange",
});

exchange.save();