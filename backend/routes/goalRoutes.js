const express = require('express');
const router = express.Router();
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalController');
const { protect } = require('../middleware/authMiddleware');

//router.get('/', getGoals);

//router.post('/', setGoals);

router.route('/').get(protect, getGoals).post(protect, setGoals); //chain routes // protected route

//router.put('/:id', updateGoals);

//router.delete('/:id',   deleteGoals);

router.route('/:id').delete(protect,deleteGoals).put(protect,updateGoals); //chain routes

module.exports = router