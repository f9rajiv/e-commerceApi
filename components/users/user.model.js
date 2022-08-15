const mongoose =require('mongoose')
const userSchema= new mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        sparse:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number, //1. for admin ,2. for customers
        default:2,
    },
        
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    address:{
       type:String,
       
    },
    gender:{
        type:String,
        enum:['male','female','others']
    },
    dob:{
        type:Date
    },
    country:{
        type:String,
        default:'nepal'
    },
    image:{
        type:String,
     
    },

})

const userModel =mongoose.model('user',userSchema)

module.exports =userModel;