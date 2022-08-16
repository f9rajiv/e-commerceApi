const cartQuery =require('./cart.query')

function get(req,res,next){
    const condition={};
    if (req.user.role !== 1){
        condition.orderId=req.user._id
    }
    cartQuery.find(condition)
    .then(function(results){
        res.json(results)
    })
    .catch(function(results){
        next(err)
    })
    
}
function post(req,res,next){
    
    const data =req.body
    data.orderId = req.user._id;
    data.product = req.user._id;

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
