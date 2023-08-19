const express = require('express');
const {  createCart, getCart, removeCart } = require('../controllers/cartController');


const router=express.Router();
router.route("/addToCart").post(createCart);
router.route('/cart').get(getCart);
router.route('/cart/:id').delete(removeCart);

module.exports=router;