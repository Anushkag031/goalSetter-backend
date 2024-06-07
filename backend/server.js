//entry point for the server

const express= require('express');
const colors = require('colors');
const dotenv= require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db.js');

const port = process.env.PORT ||  5001
connectDB(); //connect to the database
//initialize express
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/goalRoutes')); //if you hit api/goals, it will go to goalRoutes

app.use(errorHandler) //error handler middleware, it will catch any error that is thrown by this middleware and override the default error message

app.listen(port, () => console.log(`listening on port ${port}`));

