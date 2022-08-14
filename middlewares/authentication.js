const JWT =require('jsonwebtoken')
const JWT_SECRET='sfssdbxdgstgs1411fvsfg'
const UserModel=require('./../components/users/user.model')

module.exports =function(req,res,next){
    let token;
    if(req.headers['authorization'])
        token=req.headers['authorization']
    if(req.headers['x-access-token'])
        token=req.headers['x-access-token']
    if(req.query['token'])
        token=req.query['token']
    if(!token){
        return next ({
            msg:"Authentication Failed,Token Not provided",
            status:401
        })
    }
    // console.log('token>>',token)
    //token available now validate
    token=token.split(' ')[1]
    JWT.verify(token,JWT_SECRET,function(err,done){
        if (err){
            return next(err)

        }
        console.log('token verification successful',done)
        //add client information in request when passing control
        // req.user=done;
        UserModel.findOne({
            _id:done._id
        },function(err,user){
            if(err){
                return next(err)
            }
            if(!user){
                return next({
                    msg:"user removed from system",
                    status:404
                })
            }
            req.user=user //database bata veteko user latest information for user
            next();
        })

       
    })
}