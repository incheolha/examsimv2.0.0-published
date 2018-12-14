const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userController = require('../../controllers/users/user');

router.get('/', userController.user_get_all);

router.get('/getUserInfo', userController.user_get_one);

router.post('/signup', userController.user_signUp);

router.post('/login', userController.user_login);

router.delete('/', userController.user_delete);

module.exports = router;
