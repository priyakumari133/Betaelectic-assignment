const Product = require('../models/product.model');

exports.getAllProducts = () => Product.find();
