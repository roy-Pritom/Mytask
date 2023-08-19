const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const Category=require("../models/category.js");
const ErrorHandler = require("../utils/errorhander");

// exports.getCategory = catchAsyncErrors(async(req,res,next)=>{
//     // const category=[];
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//         return next(new ErrorHander("Product not found", 404));
//     }

//     const category=product.category;

//     res.status(200).json({
//         success: true,
//         category
//       });
    
// })

exports.createCategory = catchAsyncErrors(async(req,res,next)=>{
  
        const newCategory=new Category(req.body)
        try{
        const savedCity=await newCategory.save();
        res.status(200).json(savedCity)
        }
        catch(err){
        res.status(500).json(err)
        }
});

exports.getAllCategory = catchAsyncErrors(async(req,res,next)=>{
   

    try{
        const allCategory=await Category.find()
          res.status(200).json(allCategory)
          }
          catch(err){
          res.status(500).json(err)
      
      
          }
})