const createError = require('http-errors');
const mongoose = require('mongoose');

//const Product = require('../Models/Product.model');
const Product_booking = require('../Models/Customer.model');

module.exports = {
 
  createNewCustomer: async (req, res, next) => {
    try {
      const booking = new Product_booking(req.body);
      const result = await booking.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },
    

    /*Or:
  If you want to use the Promise based approach*/
    
    /*
  const booking = new Product_booking({
    model: req.body.model,
    customer_name: req.body.customer_name,
    customer_ph_no: req.body.customer_ph_no,
    issue_date: req.body.issue_date,
    return_date: req.body.return_date
  });
  booking
    .save()
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      console.log(err.message);
    }); 
    
  },
  */

  getAllCustomer: async (req, res, next) => {
    try {
      const results = await Product_booking.find({}, { __v: 0 });
      // const results = await Product.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Product.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  findCustomerByid: async (req, res, next) => {
    const id = req.params.id;
    try {
      const booking = await Product_booking.findById(id);
      // const product = await Product.findOne({ _id: id });
      if (!booking) {
        throw createError(404, 'Product does not exist.');
      }
      res.send(booking);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Product id'));
        return;
      }
      next(error);
    }
  },

  updateACustomer: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Product.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Product does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Product Id'));
      }

      next(error);
    }
  },

  deleteACustomer: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Product.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Product does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Product id'));
        return;
      }
      next(error);
    }
  }


};
