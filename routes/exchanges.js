var express = require('express');
const { Exchange } = require('../models/exchange');
var router = express.Router();
var exchanges = require('../models/exchange').exchanges;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с exchanges');
});

//  Страница после слеша /exchanges/....
router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
});


router.get("/:nick", async function(req, res, next) {
    var exchanges = await exchange.find({nick: req.params.nick});
    console.log(exchanges)
    if(!exchanges.length) return next(new Error("Нет такой модели, в разработке."))
        var exchange = exchanges[0];
        res.render('exchanges', {
            title: exchange.title,
            picture: exchange.avatar,
            desc: exchange.desc
        }) 
});

module.exports = router;
