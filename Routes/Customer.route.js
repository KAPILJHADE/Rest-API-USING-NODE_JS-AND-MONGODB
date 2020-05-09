const express = require('express');
const router = express.Router();

const ProductController = require('../Controllers/Customer.Controller');


//Get a list of all customers
router.get('/', ProductController.getAllCustomer);

//Create a new customer
router.post('/', ProductController.createNewCustomer);

//Get a customer by id
router.get('/:id', ProductController.findCustomerByid);

//Update a customer by id
router.patch('/:id', ProductController.updateACustomer);

//Delete a customer by id
router.delete('/:id', ProductController.deleteACustomer);

module.exports = router;
