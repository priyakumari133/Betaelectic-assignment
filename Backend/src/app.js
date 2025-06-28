const express = require('express');
require('./db/mongo');
const productRoutes = require('./routes/product.routes');
const basketRoutes = require('./routes/basket.routes');

const app = express();
app.use(express.json());
app.use(productRoutes);
app.use(basketRoutes);

module.exports = app;