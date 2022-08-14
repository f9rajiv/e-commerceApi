const productQuery =require('./product.query')

function get(req,res,next){
    const condition={};
    if (req.user.role !== 1){
        condition.vendor=req.user._id
    }
    //todo prepare condition
    productQuery
    .find(condition)
    .then(function(results){
        res.json(results)
    })
    .catch(function(results){
        next(err)
    })
    
}

function post(req,res,next){
    
    const data =req.body;
    //appemd necessary property in data
    //images
    //vendor
    console.log('images',req.files)
    if(req.files && req.files.length){
        data.images =req.files.map(function(item){
            return item.filename
    })
    }
    data.vendor = req.user._id;
    productQuery
     .insert(data)
     .then(function(response){
        res.json(response)
     })
     .catch(function(err){
        next(err);
     })
}

function getById(req,res,next){
    const condition={_id:req.params.id};
    //todo prepare condition
    productQuery
    .find(condition)
    .then(function(results){
        res.json(results)
    })
    .catch(function(results){
        next(err)
    })
    
}

function update(req,res,next){
const  data =req.body
//todo prepare data:
if(req.files && req.files.length){
    data.newImages =req.files.map(function(item){
        return item.filename
    })
}

productQuery
.update(req.params.id,data)
.then(function(response){
    res.json(response)
})
.catch(function(err){
    next(err);
    
})
}

function remove(req,res,next){
    productQuery.remove(req.params.id)
    .then(function(response){
        if (!response){
            return next({
                msg:'Product Not Found',
                status:404
            })
        }
        res.json(response)
    })
    .catch(function(err){
        next(err)
    })
    
}


function addReview(req,res,next){
    // /TODO AND USER IN REQ.BODY
    const data =req.body
    data.user =req.user._id
    productQuery
    .addReview(req.params.productId,data)
    .then(function(response){
        res.json(response)
    })
    .catch(function(err){
        next(err)
    })
}
module.exports={
    get,
    post,
    getById,
    update,
    remove,
    addReview

}