const mongoose = require('mongoose');

const DB_URL =
    'mongodb+srv://database:mydatabase@database.4njto.mongodb.net/products?retryWrites=true&w=majority';

mongoose.set('returnOriginal', false);
mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    // eslint-disable-next-line no-console
    .then(() => console.log('Database connected!'))
    .catch((err) => `Error connecting database: ${err.message}`);

module.exports = mongoose;
