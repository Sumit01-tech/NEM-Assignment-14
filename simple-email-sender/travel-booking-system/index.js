const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/auth.routes');
const bookingRoutes = require('./routes/booking.routes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/bookings', bookingRoutes);
app.use('/admin', bookingRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(process.env.PORT, () =>
            console.log("Server Started")
        );
    })
    .catch(err => console.log(err));
