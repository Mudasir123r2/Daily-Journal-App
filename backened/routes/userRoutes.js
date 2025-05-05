const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/userControllers.js');





module.exports = router
