const Product = require('../models/product.model');
const Basket = require('../models/basket.model');

exports.addItemToBasket = async (item) => {
  const product = await Product.findOne({ item });
  if (!product) throw new Error('Invalid item');
  await Basket.create({ product: product._id });
  return { message: `${item} added to basket` };
};

exports.getBasketSummary = async () => {
  const basket = await Basket.find().populate('product');

  const counts = {};
  let total = 0;
  basket.forEach(({ product }) => {
    counts[product.item] = (counts[product.item] || 0) + 1;
    total += product.price;
  });

  let discount = 0;
  if (counts['A']) {
    discount += Math.floor(counts['A'] / 3) * (30 * 3 - 85);
  }
  if (counts['B']) {
    discount += Math.floor(counts['B'] / 2) * (20 * 2 - 35);
  }
  let afterDiscount = total - discount;
  if (afterDiscount > 150) {
    discount += 20;
  }

  return {
    items: basket.map(b => ({ item: b.product.item, price: b.product.price })),
    totalPrice: total,
    totalDiscount: discount,
    finalPrice: total - discount,
  };
};
