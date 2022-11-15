const express = require('express');
const router = express.Router()
const { Genre, validateGenre } = require('../models/schemaGanre.js')
const Joi = require('joi');
const { validateBody } = require('../middlewares/middlewares.js')

const createGenreSchema = Joi.object({
    name: Joi.string().min(3).required()
})


router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres)
});

router.get('/:id', async (req, res) => {
    const genre = await Genre.find({ _id: req.params.id });
    if (!genre) {
        return res.status(400).send('not exist')
    }
    return res.status(200).send(genre)

})



router.post('/', validateBody(createGenreSchema), async (req, res) => {

    let genre = new Genre({
        name: req.body.name
    })
    genre = await genre.save();

    return res.status(200).send(genre)
})


router.put('/:id', async (req, res) => {
    const { error } = validateGenre(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
    if (!genre) {
        return res.status(404).send('not found genre')
    }

    res.send(genre).status(200)
})


router.delete('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);
    if (!genre) return res.status(404).send('not found genre');
    res.status(200).send(genre)

})


module.exports = router;



