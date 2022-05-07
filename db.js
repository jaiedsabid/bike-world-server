const mongoose = require('mongoose');

const DB_URL = `mongodb+srv://database:${process.env.PROJECT_DB_PASSWORD}@database.4njto.mongodb.net/${process.env.PROJECT_DB_NAME}?retryWrites=true&w=majority`;

mongoose.set('returnOriginal', false);
mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected!'))
    .catch((err) => `Error connecting database: ${err.message}`);

module.exports = mongoose;
