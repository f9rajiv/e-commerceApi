const router =require('express').Router();
const productCtrl=require('./product.controller')
const uploader =require('./../../middlewares/uploader')('image')
const authenticate =require('./../../middlewares/authentication')

router.route('/')
    .get(authenticate,productCtrl.get)
    .post(authenticate,uploader.array('images'),productCtrl.post);

router.route('/add_review/:productId')
    .post(authenticate,productCtrl.addReview)

router.route('/:id')
    .get(authenticate,productCtrl.getById)
    .put(authenticate,uploader.array('images'),productCtrl.update)
    .delete(authenticate,productCtrl.remove);


module.exports =router;