const mongoose =require('mongoose')
const Schema =mongoose.Schema;
const cartSchema =new Schema({

    product:{
        type:Schema.Types.ObjectId,
        ref:'product'
    },
    addToCart:Boolean,
    orderId:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },


},{
    timestamps:true

})


module.exports=mongoose.model('cart',cartSchema)

