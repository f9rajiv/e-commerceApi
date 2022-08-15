const router=require('express').Router();
const cartCtrl =require('./cart.controller')
const authenticate =require('./../../middlewares/authentication')
const authorize =require('./../../middlewares/authorization')

router.route('/')
    .get(cartCtrl.get)
    .post(cartCtrl.post)

    module.exports =router;