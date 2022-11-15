const { Movie, validateMovie } = require('../models/SchemaMovie')
const express = require('express');
const router = express.Router()
const { Genre } = require('../models/schemaGanre.js')
const middlewares = require('../middlewares/middlewares')



router.get('/', async (req, res) => {
    const movies = await Movie.find().sort('name');
    res.send(movies)
});

router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        return res.status(400).send('not exist')
    }
    return res.status(200).send(movie)

})



router.post('/', async (req, res) => {
    const { error } = validateMovie(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId)

    if (!genre) return res.status(400).send('invalid genre')

    let movie = new Movie({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate

    })
    movie = await movie.save();

    return res.status(200).send(movie)
})


router.put('/:id', async (req, res) => {
    const { error } = validateMovie(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const movie = await Movie.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
    if (!movie) {
        return res.status(404).send('not found movie')
    }

    res.send(movie).status(200)
})


router.delete('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);
    if (!movie) return res.status(404).send('not found movie');
    res.status(200).send(movie)

})


module.exports = router;


