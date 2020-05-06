const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/wishlistDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://janarl:password@cluster0-zzvdu.mongodb.net/wishlistDB', { useNewUrlParser: true, useUnifiedTopology: true });
require('./wish');

let db = mongoose.connection;

db.on('connected', console.error.bind(console, 'MongoDB connection Successful'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));