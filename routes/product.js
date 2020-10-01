var express = require('express');
const productRouter = express.Router();
var path = require('path');

/* GET product page. */
productRouter.get('/', function(req, res) {
    res.sendFile(path.join("./views" + '/product.html'));
});

module.exports = productRouter;