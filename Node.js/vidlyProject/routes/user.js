const express = require('express');
const router = express.Router();
const { User, validUser, validUserLogin } = require('../models/schemaUser');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { validToken } = require('../middlewares/middlewares')
const mongoose = require('mongoose')




router.post('/register', async (req, res, next) => {
    try {
        const { error } = validUser(req.body)
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: req.body.email })
        if (user) return res.status(400).send('user already registered')

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(req.body.password, salt)


        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        })

        user = await user.save()

        res.send({
            id: user._id,
            name: user.name,
            email: user.email
        })
    }
    catch (error) {
        next(error)
    }

})


router.post('/login', async (req, res, next) => {
    try {

        const { error } = validUserLogin(req.body)
        if (error) return res.status(400).send(error.details[0].message);


        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(400).send('user not found');

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(400).send(' incorrect details');



        const TOKEN_SECRET = process.env.TOKEN_SECRET;
        const token = jwt.sign({ userId: user._id }, TOKEN_SECRET)


        res.header('x-token', token).send()
    }
    catch (error) {
        next(error)
    }

})


router.get('/me', validToken, async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.user.userId })
        res.send({
            name: user.name,
            email: user.email
        })
    }
    catch (error) {
        next(error)
    }
})


module.exports = router
