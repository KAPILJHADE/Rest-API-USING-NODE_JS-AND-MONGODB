const createError = require('http-errors');
const mongoose = require('mongoose');

const Product = require('../Models/Product.model');
const Product_booking = require('../Models/Customer.model');

module.exports = {
  getAllProducts: async (req, res, next) => {
    try {
      const results = await Product.find({}, { __v: 0 });
      // const results = await Product.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Product.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewProduct: async (req, res, next) => {
    /*try {
      const car = new Product(req.body);
      const result = await car.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
    */

    /*Or:
  If you want to use the Promise based approach*/
    /**/ 
  const car = new Product({
    vehicle_no: req.body.vehicle_no,
    model: req.body.model,
    seating_capacity: req.body.seating_capacity,
    rent_perd: req.body.rent_perd
  });
  car
    .save()
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      console.log(err.message);
    }); 
    
  },

  findProductById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      // const product = await Product.findOne({ _id: id });
      if (!product) {
        throw createError(404, 'Product does not exist.');
      }
      res.send(product);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Product id'));
        return;
      }
      next(error);
    }
  },

  updateAProduct: async (req, res, next) => {
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

  deleteAProduct: async (req, res, next) => {
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
  // createNewCustomer: async (req, res, next) => {
  //   try {
  //     const booking = new Product_booking(req.body);
  //     const result = await booking.save();
  //     res.send(result);
  //   } catch (error) {
  //     console.log(error.message);
  //     if (error.name === 'ValidationError') {
  //       next(createError(422, error.message));
  //       return;
  //     }
  //     next(error);
  //   }
  // },
    

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

  // getAllCustomer: async (req, res, next) => {
  //   try {
  //     const results = await Product_booking.find({}, { __v: 0 });
  //     // const results = await Product.find({}, { name: 1, price: 1, _id: 0 });
  //     // const results = await Product.find({ price: 699 }, {});
  //     res.send(results);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

};
