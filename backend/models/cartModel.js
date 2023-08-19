const mongoose=require('mongoose');
const cartSchema = new mongoose.Schema({

    userId:{
        type: String,
        },
    productId:{
        type: String,
        required:[true]

        },
        quantity:{
            type:Number,
            required:[true]
        }
   
  });

module.exports = mongoose.model("Cart", cartSchema);
