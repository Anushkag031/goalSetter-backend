const express = require('express');
const {registerUser} = require('../controllers/userController');
const { loginUser } = require('../controllers/userController');
const { getMe } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me',protect, getMe)



module.exports = router