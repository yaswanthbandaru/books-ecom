const Book = require("../models/bookModel");

async function getAllBooks() {
    try {
        const books = await Book.find();
        return books;
    } catch (error) {
        throw error;
    }
}

async function createBook(bookData) {
    try {
        const book = new Book(bookData);
        const savedBook = await book.save();
        return savedBook;
    } catch (error) {
        throw error;
    }
}

async function updateBook(bookId, bookData) {
    try{
        const updateBook = await Book.findByIdAndUpdate(bookId, bookData, {
            new: true,
        });
        return updateBook;
    }catch (error) {
        throw error;
    }
}

async function getBook(id) {
    try {
        const book = await Book.findById(id);
        return book;
    } catch (error) {
        throw error;
    }
}

async function deleteBook(id) {
    try{
        const book = await Book.findByIdAndDelete(id);

        if(!book){
            console.log(`The requested cannot be found in the database or it is already deleted`);
        }

        return book;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllBooks,
    createBook,
    updateBook,
    getBook,
    deleteBook,
};