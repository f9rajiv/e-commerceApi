const userModel =require('./user.model');


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


function put_reg(req,res,next){ 
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


module.exports={
    find,
  
    put_reg
}

 