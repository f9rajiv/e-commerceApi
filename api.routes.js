const router =require('express').Router();
const userRoute=require('./components/users/user.route')
const authRoute=require('./components/auth/auth.controllers')

router.use('/auth',authRoute)
router.use('/user',userRoute)

module.exports=router