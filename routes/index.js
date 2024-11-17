var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Bybit */
router.get('/bybit', function(req, res, next) {
  res.render('exchange', {
    title: "Bybit",
    picture: "images/bybit.png",
    desc: "Bybit — это криптовалютная биржа, которая позволяет трейдерам торговать различными криптовалютами. Биржа известна своими низкими комиссиями и продвинутыми функциями для профессионалов."
  });
});

/* Страница Houbi */
router.get('/houbi', function(req, res, next) {
  res.render('exchange', {
    title: "Houbi",
    picture: "images/houbi.png",  // Путь к картинке Houbi
    desc: "Houbi — это криптовалютная биржа, предоставляющая множество возможностей для трейдинга. Она известна своей надежностью и большим выбором цифровых активов."
  });
});

/* Страница Binance */
router.get('/binance', function(req, res, next) {
  res.render('exchange', {
    title: "Binance",
    picture: "images/binance.png",  // Путь к картинке Binance
    desc: "Binance — крупнейшая криптовалютная биржа в мире, предоставляющая услуги трейдинга и стейкинга, а также доступ к множеству криптовалютных продуктов."
  });
});


module.exports = router;
