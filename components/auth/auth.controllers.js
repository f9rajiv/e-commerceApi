const router =require('express').Router();
const userModel =require('./../users/user.model');
const uploader=require('./../../middlewares/uploader')('image')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt =require('jsonwebtoken')
const JWT_SECRET='sfssdbxdgstgs1411fvsfg'


function generateToken(data){
    return jwt.sign({
        _id:data._id,
        username:data.username,
        role:data.role
    },JWT_SECRET
  
    )
}

router.post('/login',function (req,res,next){
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

})


router.post('/register',uploader.single('image'),function(req,res,next){ 
    console.log('req.body>>',req.body);
    console.log('req.file>>',req.file);
 
    const newUser =new userModel({});
    newUser.name =req.body.name;
    newUser.email =req.body.email;
    newUser.username=req.body.username;
    newUser.password=req.body.password;
    newUser.phoneNumber=req.body.phoneNumber;
    newUser.gender=req.body.gender;
    newUser.dob=req.body.dob;
    newUser.address=req.body.address;
  
    newUser.password = bcrypt.hashSync(req.body.password, saltRounds);
    if (req.file){

       newUser.image =req.file.filename
    }
    newUser.save(function(err,done){
            if(err){
                return next(err);
            }
            res.status(200)
            res.json(done)
        })
    
}
)
    
module.exports=router;
    
    