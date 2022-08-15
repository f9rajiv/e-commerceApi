const router =require('express').Router();
const userRoute=require('./components/users/user.route')
const authRoute=require('./components/auth/auth.controllers')
const productRoute=require('./components/products/product.route')
const cartRoute =require('./components/cart/cart.route')
router.use('/auth',authRoute)
router.use('/user',userRoute)
router.use('/product',productRoute)
router.use('/cart',cartRoute)

module.exports=router