const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    coverImage: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;