var express = require('express');
var router = express.Router();
var Exchange = require('../models/exchange').Exchange;
var checkAuth = require("../middlewares/checkAuth.js");

/* GET exchanges listing. */
router.get('/', async function(req, res, next) {
  try {
    const exchanges = await Exchange.find({});
    res.render('exchanges', { title: 'Обменники', exchanges: exchanges });
  } catch (err) {
    next(err);
  }
});

/* Страница exchanges */
router.get("/:nick", checkAuth, async function(req, res, next) {
  try {
    const exchange = await Exchange.findOne({ nick: req.params.nick });
    if (!exchange) return next(new Error("Нет такой биржи в мировой экономике"));
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