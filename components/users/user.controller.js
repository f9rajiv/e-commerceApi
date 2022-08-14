const userQuery =require('./user.query')
const userModel =require('./user.model');



function user(req,res,next){
    userQuery.find(req,res,next)
}
function updateUser(req,res,next){
    userQuery.put_user(req,res,next)    
}
function singleUser(req,res,next){
    userQuery.getUserById(req,res,next)
}
function delUser(req,res,next){
    userQuery.delUserById(req,res,next)
}
module.exports={
    user,
    updateUser,
    singleUser,
    delUser

    
}
