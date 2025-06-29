const express = require('express');
const { signup, login, forgotPassword, resetPassword } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot', forgotPassword);
router.post('/reset/:token', resetPassword);

module.exports = router;
