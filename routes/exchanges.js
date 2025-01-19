var express = require('express');
var router = express.Router();
var Cat = require('../models/exchange').exchange;
var checkAuth = require("../middlewares/checkAuth.js");


/* GET exchange listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с exchange');
});

/* Страница котов */
router.get("/:nick", checkAuth, async function(req, res, next) {
    var exchanges = await exchange.find({nick: req.params.nick});
    console.log(exchanges)
    if(!exchanges.length) return next(new Error("Нет такой биржи в мировой экономике"))
        var exchange = exchanges[0];
        res.render('exchange', {
            title: exchange.title,
            picture: exchange.avatar,
            desc: exchange.desc
        })
});


//Hero.find({},{_id:0,title:1,nick:1},callback)


module.exports = router;