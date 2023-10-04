const Router = require('express')
const router = new Router()
const UserController = require('../controler/user.controler')

router.post('/user', UserController.createUser)
router.get('/user', UserController.getUser)
router.get('/user/:id', UserController.getOneUser)
router.put('/user', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)


module.exports = router