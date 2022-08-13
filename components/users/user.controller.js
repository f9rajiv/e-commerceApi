const userQuery =require('./user.query')
const userModel =require('./user.model');



function user(req,res,next){
    userQuery.find(req,res,next)
}
function updatereg(req,res,next){
    userQuery.put_reg(req,res,next)
}
module.exports={
    user,
    updatereg

    
}
