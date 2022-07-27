const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phone : {
        type: Number,
        required: true,
        unique: true
    },
    city : {
        type: String,
        required: true,
    },
    duration : {
        type: Number,
        required: true,
    },
    rooms : {
        type: Number,
        required: true,
    },
    rent : {
        type: Number,
        required: true,
    }
    
})

const Rentaldb = mongoose.model('rentaldb', schema);

module.exports = Rentaldb;