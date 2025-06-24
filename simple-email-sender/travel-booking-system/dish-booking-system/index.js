require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');
const dishRoutes = require('./routes/dish.routes');
const orderRoutes = require('./routes/order.routes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/dishes', dishRoutes);
app.use('/orders', orderRoutes);

app.get('/', (req, res) => res.send('Dish Booking API Running'));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>
            console.log("Server Started")
        );
    })
    .catch((err) => console.log(err));
