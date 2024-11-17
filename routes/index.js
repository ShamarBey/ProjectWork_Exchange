var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Bybit */
router.get('/Bybit', function(req, res, next) {
  res.send("<h1>Страница Bybit</h1>");
});

/* Страница Binance */
router.get('/Binance', function(req, res, next) {
  res.send('<h1>Страница Binance</h1>');
});

/* Страница Houbi */
router.get('/Houbi', function(req, res, next) {
  res.send('<h1>Страница Houbi</h1>');
});

module.exports = router;
