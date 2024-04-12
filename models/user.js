const mongoose = require('mongoose');

const createSchema = new mongoose.Schema({
    googleID : {
        type : String,
        required :  true
    },
    displayName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }

});

module.exports = mongoose.model('users' , createSchema);