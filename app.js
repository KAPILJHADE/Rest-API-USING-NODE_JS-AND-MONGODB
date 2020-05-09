const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv').config();

const bodyParser = require("body-parser")


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize DB
require('./initDB')();

const ProductRoute = require('./Routes/Product.route');
app.use('/cars', ProductRoute);
const CustomerRoute = require('./Routes/Customer.route');
app.use('/bookings', CustomerRoute);

//404 handler and pass to error handler
app.use((req, res, next) => {
  /*
  const err = new Error('Not found');
  err.status = 404;
  next(err);
  */
  // use the above code if your not using the http-errors module
  next(createError(404, 'Not found'));
});

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});
