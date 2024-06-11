const express = require('express');
const {registerUser} = require('../controllers/userController');
const { loginUser } = require('../controllers/userController');
const { getMe } = require('../controllers/userController');
const router = express.Router();

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)


module.exports = router