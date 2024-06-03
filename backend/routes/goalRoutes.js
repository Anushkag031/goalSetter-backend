const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message:'Get goals' }); //will show in postman
});

router.post('/', (req, res) => { //post request
    res.status(200).json({ message:'Post goals' }); //will show in postman
});

router.put('/:id', (req, res) => { //put request (update goal)
    res.status(200).json({ message:`Update goal ${req.params.id}` }); // passing the id
});

router.delete('/:id', (req, res) => { //delete request
    res.status(200).json({ message:`Delete goal ${req.params.id}` }); //will show in postman
})

module.exports = router