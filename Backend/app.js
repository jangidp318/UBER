const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors')
const app = express();
const connectToDb = require('./db/db');

/* Routers */
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes')
const mapsRoutes = require('./routes/maps.routes')
const rideRoutes = require('./routes/ride.routes')
const compareRoutes = require('./routes/compare.routes')

const cookieParser = require('cookie-parser')
connectToDb();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/users', userRoutes);
app.use('/captains', captainRoutes)
app.use('/maps', mapsRoutes)
app.use('/rides', rideRoutes);
app.use('/compare', compareRoutes);


module.exports = app;