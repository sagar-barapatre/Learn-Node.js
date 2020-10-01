var express = require('express');
const shopRouter = express.Router();
var path = require('path');

/* GET product page. */
shopRouter.get('/', function(req, res) {
    res.sendFile(path.join("./views" + '/shop.html'));
});

module.exports = shopRouter;