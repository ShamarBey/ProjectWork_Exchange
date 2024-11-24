const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const Exchange = mongoose.model('Exchange', { name: String });

const exchange = new Exchange({ name: 'Биржи' });
exchange.save().then(() => console.log('Биржи = P2P'));