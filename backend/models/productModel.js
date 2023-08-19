const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

  categoryId:{
    type:String,
    required:[true]

  },
  title: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  availability: {
    type: Number,
    required: [true, "Please Enter product availability"],
    
  }
  // ratings: {
  //   type: Number,
  //   default: 0,
  // },
 
  // Stock: {
  //   type: Number,
  //   required: [true, "Please Enter product Stock"],
  //   maxLength: [4, "Stock cannot exceed 4 characters"],
  //   default: 1,
  // },
  // numOfReviews: {
  //   type: Number,
  //   default: 0,
  // },
  // reviews: [
  //   {
  //     user: {
  //       type: mongoose.Schema.ObjectId,
  //       ref: "User",
  //     },
  //     name: {
  //       type: String,
  //       // required: true,
  //       default:"oil"
  //     },
  //     rating: {
  //       type: Number,
  //       // required: true,
  //       default:5
  //     },
  //     comment: {
  //       type: String,
  //       // required: true,
  //       default:"very nice"
  //     },
  //   },
  // ],

  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model("Product", productSchema);
