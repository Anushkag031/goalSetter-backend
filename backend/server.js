//entry point for the server

const express= require('express');
const dotenv= require('dotenv').config();
const port = process.env.PORT ||  5001

//initialize express
const app = express();

app.use('/api/goals', require('./routes/goalRoutes')); //if you hit api/goals, it will go to goalRoutes

app.listen(port, () => console.log(`listening on port ${port}`));
