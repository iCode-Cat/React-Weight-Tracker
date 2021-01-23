const mongoose = require('mongoose');
const { Schema } = mongoose;

const trackerSchema = new Schema({

    username:{type:String},
    weight:{type:Number,trim:true},
    oWeight:{type:Number},
    age:{type:Number},
    height:{type:Number}

})


const Tracker = mongoose.model('Track', trackerSchema);
module.exports = Tracker;