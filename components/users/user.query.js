const userModel =require('./user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt =require('jsonwebtoken')
const configs=require('../../configs');

function generateToken(data){
    return jwt.sign({
        _id:data._id,
        username:data.username,
        role:data.role
    },configs.JWT_SECRET
  
    )
}
function find(req,res,next){
    userModel
       .find()
       .exec(function(err,users){
           if(err){
               return next(err)
           }
           res.json(users)
       })
   
   }

function post_login(req,res,next){
    userModel.findOne({
        username:req.body.username
    })
    .then(function(user){
        
        if(!user){
            return next ({
                msg:'invalid username',
                status:400
            }) 
        }
        const isMatched =bcrypt.compareSync(req.body.password,user.password);
            if(!isMatched){
            return next({
                msg:"invalid password",
                status:400
            })
        }
        let token =generateToken(user)
        res.json({
        
            user:user,
         token:token
        })
    })
    .catch(function(err){
    next(err);
})

}

function post_reg(req,res,next){ 
    console.log('req.body>>',req.body);

    const newUser =new userModel({});
    newUser.name =req.body.name;
    newUser.email =req.body.email;
    newUser.username=req.body.username;
    newUser.password=req.body.password;
    newUser.password = bcrypt.hashSync(req.body.password, saltRounds);
   
    newUser.save(function(err,done){
            if(err){
                return next(err);
            }
            res.status(200)
            res.json(done)
        })
    
}

module.exports={
    find,
    post_login,
    post_reg
}

 