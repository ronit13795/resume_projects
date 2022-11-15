const mongoose = require('mongoose')
const { genreSchema } = require('./schemaGanre')
const Joi = require('joi');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 250,

    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 250
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 250
    }

})


const Movie = mongoose.model('Movie', movieSchema);

function validateMovie(movie) {
    const schema = Joi.object({
        title: Joi.string().required().max(50).min(5),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(1).required()

    })
    return schema.validate(movie)
}



module.exports.Movie = Movie
module.exports.validateMovie = validateMovie
