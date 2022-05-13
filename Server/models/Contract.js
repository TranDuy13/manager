const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Contract = new Schema({
    description: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },

    timeStart: {
        type: Date,
        required: true
    },
    timeEnd: {
        type: Date,
        required: true
    },
    employee: [
        { type: mongoose.SchemaTypes.ObjectId, ref: 'user' }
    ]

}, { timestamps: true })

module.exports = mongoose.model('Contract', Contract)