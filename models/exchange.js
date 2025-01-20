var express = require('express');
var router = express.Router();
var Exchange = require('../models/exchange').Exchange;
var checkAuth = require("../middlewares/checkAuth.js");

/* GET страница "Обменники" */
router.get('/', async function(req, res, next) {
  try {
    const exchanges = await Exchange.find({}); // Получаем все биржи из базы
    res.render('exchanges', { title: 'Обменники', exchanges: exchanges });
  } catch (err) {
    next(err);
  }
});

/* GET страница конкретной биржи */
router.get("/:nick", checkAuth, async function(req, res, next) {
  try {
    const exchange = await Exchange.findOne({ nick: req.params.nick }); // Ищем биржу по nick
    if (!exchange) {
      return next(new Error('Биржа не найдена'));
    }
    res.render('exchange', {
      title: exchange.title,
      picture: exchange.avatar,
      desc: exchange.desc
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;