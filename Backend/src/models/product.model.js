const mongoose = require('../db/mongo'); 

const ProductSchema = new mongoose.Schema({
    item: String,
    price: Number,
  });
  
  module.exports = mongoose.model('Product', ProductSchema);
  