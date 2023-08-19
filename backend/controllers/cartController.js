const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Cart=require('../models/cartModel.js');
const ErrorHandler = require("../utils/errorhander");

exports.createCart = catchAsyncErrors(async(req,res,next)=>{
  
    const newCart=new Cart(req.body)
    try{
    const savedCart=await newCart.save();
    res.status(200).json(savedCart)
    }
    catch(err){
    res.status(500).json(err)
    }
});

exports.getCart = catchAsyncErrors(async(req,res,next)=>{
   

    try{
        const cartData=await Cart.find()
          res.status(200).json(cartData)
          }
          catch(err){
          res.status(500).json(err)
      
      
          }
})

exports.removeCart = catchAsyncErrors(async(req,res,next)=>{
   
    const item = await Cart.findById(req.params.id);

    if (!item) {
      return next(new ErrorHandler("item not found", 404));
    }
  
  
    await item.remove();
  
    res.status(200).json({
      success: true,
      message: "item Delete Successfully",
    });
})