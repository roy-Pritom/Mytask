const express = require('express');
const { getCategory,createCategory, getAllCategory } = require('../controllers/categoryController');


const router=express.Router();

// router.route("/product/:id").get(getCategory);
router.route("/addCategory").post(createCategory);
router.route("/allCategory").get(getAllCategory);

module.exports=router;