const ProductModel =require('./product.model');
function map_product_req(productData,product){
    if(productData.name)
        product.name=productData.name;
    
    if(productData.category)
        product.category=productData.category;

    if(productData.description)
        product.description=productData.description;

    if(productData.stock)
        product.stock=productData.stock;

    if(productData.modelNo)
        product.modelNo=productData.modelNo;

    if(productData.color)
        product.color=productData.color;

    if(productData.brand)
        product.brand=productData.brand;

    if(productData.price)
        product.price=productData.price;

    if(productData.size)
        product.size=productData.size;

    if(productData.vendor)
        product.vendor=productData.vendor;

    if(productData.images)
        product.images=productData.images;

    if(productData.status)
        product.status=productData.status;

    if(productData.isReturnEligible)
        product.isReturnEligible=true;

    if(productData.setIsReturnEligibleFalse)
        product.isReturnEligible=false;

    if(productData.warrentyStatus)
        product.warrentyStatus=true

    if(productData.setWarrentyStatusFalse)
        product.warrentyStatus=false

    if(productData.warrentyPeriod)
        product.warrentyPeriod=productData.warrentyPeriod;

    if(productData.orderNumber)
        product.orderNumber=productData.orderNumber;   

}

function map_review_data(reviewData,review){
    if(reviewData.user)
        review.user=reviewData.user
    if(reviewData.point)
        review.point=reviewData.point
    if(reviewData.message)
        review.message=reviewData.message;
    
}

//CRUD Operation core kaaam garne


function find(condition){
    // return new Promise(function(resolve,reject){
        return ProductModel
        .find(condition,{
            category:1,
            name:1,
            reviews:1

        })
        .sort({
            _id:-1
        })
        .populate('vendor',{
            username:1,
            email:1
        })
        .populate('reviews.user',{
            email:1

        })
        .exec()//yeta exec ko promise le kaam garxa seprate parena

    // })
   
}

function insert(data){
        const newProduct=new ProductModel({});
        map_product_req(data,newProduct)
        return newProduct.save()
   

}
function update(id,data){
    return new Promise(function(resolve,reject){
        ProductModel.findById(id,function(err,product){
            if (err){
                return reject(err);

            }
            if(!product){
                return reject({
                    msg:'productNot FOund',
                    status:404
                })

            }
            if(data.newImages){
                product.images=product.images.concat(data.newImages)
            }
            //if Product Found Update
            map_product_req(data,product)
            product.save(function(err,updated){
                if(err){
                    return reject(err);
                }
                resolve(updated)
            })
        })
    })

}
function remove(id){
    return ProductModel.findByIdAndRemove(id) ///returned theri promise

}
function addReview(productId,reviewData){
return new Promise(function (resolve,reject){
    ProductModel.findById(productId,function(err,product){
        if(err){
            return reject(err)
        }
        if (!product){
            return reject({
                msg:'product Not Found',
                status:404
            })
        }
//map review data
const newReview={};
map_review_data(reviewData,newReview)
product.reviews.push(newReview)
product.save(function(err,done){
    if(err){
        return reject(err);

    }
    resolve(done);
})
    })

})
}
module.exports={
    find,
    insert,
    update,
    remove,
    addReview
}


