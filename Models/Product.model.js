const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  
        vehicle_no: {
          type: Number,
          //required: true
        },
        model: {
          type: String,
        },
        seating_capacity: {
          type: Number,
        },
        rent_perd: {
          type: Number,
          //required: true
        }
      

      
});

const Product = mongoose.model('car', ProductSchema);
module.exports = Product;
