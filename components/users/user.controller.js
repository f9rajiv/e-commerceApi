const userQuery =require('./user.query')
const userModel =require('./user.model');



function user(req,res,next){
    userQuery.find(req,res,next)
}
function login(req,res,next){
    userQuery.post_login(req,res,next)
}
function register(req,res,next){
    userQuery.post_reg(req,res,next)
}

module.exports={
    user,
    login,
    register,

    
}
