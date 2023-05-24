const express = require('express');

const app = express();

// define routes location
const SensorRoutes = require('./routes/api/sensordata');

const cors = require('cors');
// Initialize Middleware
app.use(express.json({ extended: false }));

// Use cors
app.use(
    cors({
        origin: 'http://localhost:8080',

    })


);




// use routes
app.use('/api/sensordata', SensorRoutes);



app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));