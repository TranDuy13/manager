const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Schedule = new Schema({

    date: {
        type: String,
        required: true
    },
    shift:{
        type: String,
    },
    employee:[
        { type: mongoose.SchemaTypes.ObjectId, ref: 'user' }
    ],
    dayOff:{
        type: String,
        enum: ['OFF','ON'],
        default: 'ON'
    },

}, { timestamps: true })

Schedule.pre(/^find/, function (next) {
    this.populate({
        path: 'employee',
        select: '-password',
    });
    next();
});
module.exports = mongoose.model('Schedule', Schedule)