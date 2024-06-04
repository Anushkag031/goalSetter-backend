//by default, express will throw an error html page error message, we can customize the error message by creating a middleware function
//by default, express will pass 4 arguments to the middleware function, the first one is the error object

//middleware function is called when there is an error

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ?  res.statusCode : 500 ; //if the error is not caught, we will return a 500 status code

  res.status(statusCode);
  res.json({
    message: err.message,
    //if the error is not caught, we will not show the stack trace
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, //if we are in production, we will not show the stack trace
  });
}

module.exports ={
    errorHandler,
}