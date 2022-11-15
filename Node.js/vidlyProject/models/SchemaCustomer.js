
const mongoose = require('mongoose');
const Joi = require('joi');


const costumerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    isGold: {
        type: Boolean,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    }
})

const Customer = mongoose.model('Customer', costumerSchema)



function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        isGold: Joi.boolean().required(),
        phone: Joi.string().min(10).required()
    })
    return schema.validate(customer)
}


module.exports.Customer = Customer
module.exports.validateCustomer = validateCustomer
module.exports.costumerSchema = costumerSchema
