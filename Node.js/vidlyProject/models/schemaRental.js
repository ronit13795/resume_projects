const Joi = require('joi');
const mongoose = require('mongoose');
const router = require('../routes/genres');



const rentalSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true
    },
    movieId: {
        type: String,
        required: true
    },
    dateOut: {
        type: Date,
        default: Date.now
    },

    dateReturned: {
        type: Date
    },
    rentalFee: {
        type: Number,
        min: 0
    }

})

const Rental = mongoose.model('Rental', rentalSchema)

function validRental(rental) {
    const schema = Joi.object({
        customerId: Joi.string().required(),
        movieId: Joi.string().required()
    })
    return schema.validate(rental)

}


module.exports.validRental = validRental
module.exports.Rental = Rental

