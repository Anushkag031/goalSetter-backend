//entry point for the server

const express= require('express');
const dotenv= require('dotenv').config();
const port = process.env.PORT ||  5001

//initialize express
const app = express();

app.get('/api/goals', (req, res) => {
    res.json({ message:'Get goals' }); //will show in postman
});

app.listen(port, () => console.log(`listening on port ${port}`));
