const mongoose = require('../db/mongo');
const BasketSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
});

module.exports = mongoose.model('Basket', BasketSchema);
