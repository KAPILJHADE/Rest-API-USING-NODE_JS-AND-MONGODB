const express = require('express');
const router = express.Router();

const ProductController = require('../Controllers/Product.Controller');

//Get a list of all products
router.get('/', ProductController.getAllProducts);

//Create a new product
router.post('/', ProductController.createNewProduct);

//Get a product by id
router.get('/:id', ProductController.findProductById);

//Update a product by id
router.patch('/:id', ProductController.updateAProduct);

//Delete a product by id
router.delete('/:id', ProductController.deleteAProduct);

//Get a list of all customers
//router.get('/', ProductController.getAllCustomer);

//Create a new customer
//router.post('/add_customer', ProductController.createNewCustomer);

//Get a customer by id
//router.get('/:id', ProductController.findCustomerById);

//Update a customer by id
//router.patch('/:id', ProductController.updateACustomer);

//Delete a customer by id
//router.delete('/:id', ProductController.deleteAcustomer);

module.exports = router;
