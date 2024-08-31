const mongoose = require('mongoose');
var Userdb = require('../models/model');
var User = require('../../app')

var schema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'UserDb' },
    carName: {
        type: String
    },
    Pickup: {
        type: String
    },
    Dropoff: {
        type: String
    },

    PickupDate: {
        type: String
    },
    DropoffDate: {
        type: String
    },
    total: {
        type: String
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

})

const orderDb = mongoose.model('orderDb', schema);
module.exports = orderDb;