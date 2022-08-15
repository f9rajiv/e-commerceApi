const router =require('express').Router();
const productCtrl=require('./product.controller')
const uploader =require('./../../middlewares/uploader')('image')
const authenticate =require('./../../middlewares/authentication')
const authorize =require('./../../middlewares/authorization')

router.route('/')
    .get(authenticate,productCtrl.get)
    .post(authenticate,authorize,uploader.array('images'),productCtrl.post);

router.route('/add_review/:productId')
    .post(authenticate,productCtrl.addReview)

router.route('/:id')
    .get(authenticate,productCtrl.getById)
    .put(authenticate,authorize,uploader.array('images'),productCtrl.update)
    .delete(authenticate,authorize,productCtrl.remove);


module.exports =router;