const router=require('express').Router();
const cartCtrl =require('./cart.controller')
const authenticate =require('./../../middlewares/authentication')
const authorize =require('./../../middlewares/authorization')

router.route('/')
    .get(authenticate,cartCtrl.get)
    .post(authenticate,authorize,cartCtrl.post)

    module.exports =router;