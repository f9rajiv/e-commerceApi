const cartModel =require('./cart.model');
function map_cart_data(cartData,cart){
    if(cartData.orderId)
        cart.orderId=cartData.orderId
    if(cartData.addToCart)
        product.addToCart=true;
    if(cartData.setaddToCartFalse)
        product.addToCart=false;
    if(cartData.product)
        cart.product=cartData.product

    
}
function find(){
    // return new Promise(function(resolve,reject){
        return cartModel
        .find()
        .populate('product',{
            username:1,
            email:1
        })
        .populate('user',{
            email:1

        })
        .exec()//yeta exec ko promise le kaam garxa seprate parena

    // })
   
}
function insert(data){
    const newcart=new cartModel({});
    map_cart_data(data,newcart)
    return newcart.save()


}
module.exports={
    find,
    insert
   
}
