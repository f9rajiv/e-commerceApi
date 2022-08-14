const userModel =require('./user.model');
const fs = require("fs");



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
function getUserById(req,res,next){
    userModel.findById(req.params.id,function(err,user){
        if(err){
            return next(err);

        }
        if (!user){
            return next({
                msg:"user Not Found",
                status :404
            })
          
        }
        res.json(user)
    } )
}

function put_user(req,res,next){ 
    console.log('req.body>>',req.body);
    console.log('req.file>>',req.file);
    userModel.findOne({
        _id:req.params.id
      },function(err,user){

        if (err){
            return next(err);
        }
      
        if(!user){
            next({
                msg:"user not found",
                status:404
            })
        }
        const request_data=req.body;
        if (req.file){
            request_data.image=req.file.filename;
        }
        if (req.body.name)
            user.name=req.body.name;
        if (req.body.role)
            user.role=req.body.role;
        if(req.body.password)
            user.password=req.body.password;
        if(req.body.email)
            user.email =req.body.email;
        if(req.body.phoneNumber)
            user.phoneNumber=req.body.phoneNumber;
        if(req.body.dob)
            user.dob=req.body.dob;
        if(req.body.gender)
            user.gender =req.body.gender
        if(req.body.address)
            user.address =req.body.address
        if (req.body.country)
            user.country=req.body.country
        if(req.body.image)
            user.image=req.body.image

       user.save(function(err,updated){ 
                if (err){
                    return next(err);

                }
                
                res.json(updated)
                
            })
        })
    }
    
    function delUserById (req, res, next) {
        const id = req.params.id;
        userModel.findByIdAndDelete(id, function (err, done) {
          if (err) {
            return next(err);
          }
          if (!done) {
            return next("file deleted");
          }
          res.send(done);
          fs.unlink('./uploads/images/'  + done.image, (err) => {
            if (err) {
                console.log("failed to delete local image:"+err);
            } else {
                console.log('successfully deleted local image');                                
            }
    });
          console.log('./uploads/'  + done.image)
    
       
      })
      };   
module.exports={
    find,
    put_user,
    getUserById,
    delUserById
}

 