const express = require('express');
let  { generateAccessToken, authenticateToken } = require('../jwt/auth')

const router = express.Router();
const userController = require('../controller/user');
const userPostController = require('../controller/userPost');
router.post('/user-post',userController.sign)
router.get('/user-get',userController.getAllData)
router.put('/user-update/:id',userController.update_data)
router.delete('/user-delete/:id',userController.delete_data)
router.post('/user-login', userController.user_login)
router.post('/userPost',userPostController.Post)
router.get('/get/:id',userPostController.getbyId)

module.exports = router;