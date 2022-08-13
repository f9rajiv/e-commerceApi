const router =require('express').Router();
const userCtrl=require('./user.controller')
const uploader=require('./../../middlewares/uploader')('image')

router.route('/')
.get(userCtrl.user)


router.route('/:id')
// .get(userCtrl.singleUser)
.put(uploader.single('image'),userCtrl.updatereg)
// .delete(userCtrl.delUser)

module.exports=router;