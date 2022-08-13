//authorization is followed with authentication
// after authentication only authorization

module.exports =function(req,res,next){
if(req.user.role === 1){
    next();


} 
else{
    next({
        msg:"authorization Failed !You dont have access",
        status:401
    })
}
}