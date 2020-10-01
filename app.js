const express = require('express');
const path = require('path');
const app = express();
const productRouter = require('./router/product');
const shopRouter = require('./router/shop');

app.use(express.urlencoded({
    extended: true
}));

app.use("/product", productRouter);
app.use("/shop", shopRouter);


app.use('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'product.html'));
});

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'shop.html'));
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});