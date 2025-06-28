const Product = require('../models/product.model');

exports.listProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};