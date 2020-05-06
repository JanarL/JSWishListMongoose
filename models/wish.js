const mongoose = require('mongoose');
const path = require('path');

const Schema = mongoose.Schema;

const wishSchema = new Schema({
    wish: {
        type: String
    }
})

mongoose.model('Wish', wishSchema);