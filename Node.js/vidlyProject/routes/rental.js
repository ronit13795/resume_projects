const { Rental, validRental } = require("../models/schemaRental")
const express = require('express');
const router = express.Router()
const { Movie } = require('../models/SchemaMovie');
const { Customer } = require('../models/SchemaCustomer');


router.get('/', async (req, res) => {
    const rental = Rental.find().sort({ dateOut: -1 })
})

router.post('/', async (req, res) => {
    const { error } = validRental(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send('customer not found');

    const movie = await Movie.findById(req.body.movieId);
    if (!movie) return res.status(400).send('movie not found');

    if (movie.numberInStock === 0) return res.status(400).send('movie not in stock');

    let rental = new Rental({
        customerId: req.body.customerId,
        movieId: req.body.movieId
    })
    rental = await rental.save()

    movie.numberInStock--
    await movie.save()

    res.send(rental)

})

router.put('/end/:id', async (req, res) => {
    let rental = await Rental.findById(req.params.id)
    if (!rental) return res.status(400).send('rental not found');

    const movie = await Movie.findById(rental.movieId);
    movie.numberInStock++;
    await movie.save()

    rental.dateReturned = Date.now()

    const timeInMil = rental.dateReturned.getTime() - rental.dateOut.getTime()
    const differenceInDays = timeInMil / (1000 * 3600 * 24)
    const totalPrice = movie.dailyRentalRate * differenceInDays
    rental.rentalFee = totalPrice.toFixed('2')

    rental = await rental.save()
    res.status(200).send(rental)

})




















module.exports = router