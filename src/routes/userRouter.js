const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const {check} =  require('express-validator');
router.post('/registration',[
    check ('email', 'User email shoud not be empty').notEmpty(),
    check('email', 'Email should has correct email format').isEmail(),
    check ('password', 'User password should be with min 4 signs').isLength({min:8}),
    check('username', 'Username shoud not be empty').notEmpty()
], UserController.registration);
router.post('/login', UserController.login);
module.exports = router;