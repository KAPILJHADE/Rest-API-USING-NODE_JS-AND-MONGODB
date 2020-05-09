const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product_booking_Schema = new Schema({
    
        model: {
          type: String,
        },
        
         customer_name:{
             type: String,
             //required: true
           },
         customer_ph_no:{
            type: Number,
            //required: true
             },
                              
        
        issue_date: {
          type: Date,
          //required: true

        },
        return_date: {
          type: Date,
          //required: true
        },
        
      
});

const Product_booking = mongoose.model('booking', Product_booking_Schema);
module.exports = Product_booking;
