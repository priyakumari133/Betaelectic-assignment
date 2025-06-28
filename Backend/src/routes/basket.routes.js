const express = require('express');
const { addToBasket, getBasketDetails } = require('../controllers/basket.controller');
const router = express.Router();

router.post('/basket', addToBasket);
router.get('/basket', getBasketDetails);

module.exports = router;
