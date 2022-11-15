const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String,
        minlength: 2
    },
    email: {
        require: true,
        type: String,
        unique: true
    },
    password: {
        require: true,
        type: String,
        minlength: 6
    }

})

const User = mongoose.model('user', userSchema)

function validUser(user) {
    const schema = Joi.object({
        name: Joi.string().required().min(2),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6)
    })
    return schema.validate(user)

}


function validUserLogin(user) {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6)
    })
    return schema.validate(user)

}

module.exports = {
    User: User,
    validUser: validUser,
    validUserLogin: validUserLogin

}