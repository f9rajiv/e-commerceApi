const cartModel =require('./cart.model');
function map_cart_data(cartData,cart){
    if(cartData.orderId)
        cart.orderId=cartData.orderId
    if(cartData.addToCart)
        cart.addToCart=true;
    if(cartData.setaddToCartFalse)
        cart.addToCart=false;
    if(cartData.product)
        cart.product=cartData.product

    
}
function find(condition){
    
        return cartModel
        .find(condition)
        .populate('product',{
            name:1
        })
        .populate('orderId',{
            username:1,
            email:1
        })
        .exec()
   
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
