const router =require('express').Router();
const userRoute=require('./components/users/user.route')
const authRoute=require('./components/auth/auth.controllers')
productRoute=require('./components/products/product.route')

router.use('/auth',authRoute)
router.use('/user',userRoute)
router.use('/product',productRoute)

module.exports=router