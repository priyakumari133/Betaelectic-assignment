const { addItemToBasket, getBasketSummary } = require('../services/checkout.service');

exports.addToBasket = async (req, res) => {
  const { item } = req.body;
  try {
    const result = await addItemToBasket(item);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBasketDetails = async (req, res) => {
  const result = await getBasketSummary();
  res.json(result);
};