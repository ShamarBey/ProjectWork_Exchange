// middlewares/createMenu.js
const Exchange = require("../models/exchange").Exchange; // Убедитесь, что путь правильный

module.exports = async function(req, res, next) {
    res.locals.nav = [];

    try {
        const menu = await Exchange.find({}, { _id: 0, title: 1, nick: 1 }); // Используем пустой объект для поиска
        if (menu.length !== 0) {
            res.locals.nav = menu;
        }
    } catch (err) {
        console.error("Ошибка при получении данных из базы:", err);
    }

    next();
};