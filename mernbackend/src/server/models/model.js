const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
                type : String
            },
            price: {
                type: Number
            },
            fuelType : String,
        
            description: {
                type : String
            },
            seats: {
                type: Number
            },
            image: {
                type: String
            },

        })

const Userdb = mongoose.model('carDB', schema);

module.exports = Userdb;