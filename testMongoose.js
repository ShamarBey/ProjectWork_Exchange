const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

// Определяем схему для модели
var schema = mongoose.Schema({ name: String });

// Добавляем метод к схеме
schema.methods.announce = function() {
  console.log(this.name + " объявили о торгах");
};

// Создаем модель на основе схемы
const Exchange = mongoose.model('Exchange', schema);

// Создаем экземпляр модели и сохраняем его в базе данных
const exchange = new Exchange({ name: 'Биржи' });
exchange.save().then(() => exchange.announce());