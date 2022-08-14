const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const reviewSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    point:{
        type:Number,
        min:1,
        max:10,
    },
    message:{
        type:String,
        required:true
    }
    
},{timestamps:true})


const ProductSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    description:String,
    stock:Number,
    modelNo:String,
    category:{
        type:String,
        required:true
    },
    color:String,
    brand:String,
    price:Number,
 
    size:String,
    //seller information
    vendor:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    images:[String],
    status:{
        type:String,
        enum:['available','out-of-stock','booked'],
        default:'available'
    },
    reviews : [reviewSchema],
    isReturnEligible:Boolean,   
    warrentyStatus:Boolean,
    warrentyPeriod:String,

},{
    timestamps:true

})

module.exports=mongoose.model('product',ProductSchema)