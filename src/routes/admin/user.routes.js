const express = require('express');
const router = express.Router();
const controllers = require('../../user/controllers/user.controller');

// Dashboard
router.get('/', controllers.get);
router.get('/profile', controllers.profile);

// User
router.get('/login', controllers.login);
router.get('/signup', controllers.signup);

// Chat
router.get('/chat', controllers.chat);


module.exports = router;