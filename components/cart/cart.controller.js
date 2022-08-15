const cartQuery =require('./cart.query')

function get(req,res,next){
    cartQuery.find()
    .then(function(results){
        res.json(results)
    })
    .catch(function(results){
        next(err)
    })
    
}
function post(req,res,next){
    
    const data =req.body;
   cartQuery
     .insert(data)
     .then(function(response){
        res.json(response)
     })
     .catch(function(err){
        next(err);
     })
}
module.exports={
    get,
    post

}
