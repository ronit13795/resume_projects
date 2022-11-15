

process.on('uncaughtException', (err) => {
    process.exit(1)
})

process.on('unhandledRejection', (err) => {
    process.exit(1)
})


const express = require('express');
const app = express();
const genres = require('./routes/genres');
const customers = require('./routes/costumers')
const mongoose = require('mongoose');
const movies = require('./routes/movies')
const rental = require('./routes/rental')
const user = require('./routes/user')
const { validToken } = require('./middlewares/middlewares')
const logReq = require('./middlewares/middlewereReq')
const errors = require('./middlewares/errorMiddeleware');


app.use(express.json());
app.use(logReq)
app.use('/api/genres', genres);
app.use('/api/customers', validToken, customers);
app.use('/api/movies', movies);
app.use('/api/rental', validToken, rental)
app.use('/api/user', user);
app.use(errors);



mongoose.connect('mongodb://localhost/vidly')
    .then(() => {
        console.log('connected to mongoDb...');
    }).catch((err) => console.log('could not connect to mongoDb...'))









app.listen(3000, () => {
    console.log('listening on port 3000');
})




