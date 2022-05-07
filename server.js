const express = require('express');

require('dotenv').config();
const app = express();
const db = require('./db');
const cors = require('cors');
const products = require('./routes/products');
const user = require('./routes/login');

// Middlewares
app.use(cors());
app.use(express.json());

// Moduler routes
app.use('/api/products', products);
app.use('/api/user', user);

// Root route
app.get('/', (req, res) => {
    res.send('Server is working fine');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
