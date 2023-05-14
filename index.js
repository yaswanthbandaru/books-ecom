const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000
const { getAllBooks, createBook, updateBook, getBook, deleteBook } = require('./services/bookServices');


// *********************************************
// ****************** MONGODB ******************
// *********************************************
// database connection
const mongoose = require('mongoose');

// url for connection
const myurl = 'mongodb+srv://yash:12345@cluster0.hk9d6rl.mongodb.net/Books-Ecom?retryWrites=true&w=majority'

// connect to MongoDB database
mongoose.connect(myurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// create a connection object
const db = mongoose.connection;

// handle connection errors
db.on('error', console.error.bind(console, 'connection error:'));

// once connected, log a success message
db.once('open', function() {
    console.log("Connected to MongoDB database!");
});

// *********************************************

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async(req, res) => {
    const allbooks = await getAllBooks();
    res.send(allbooks);
});

app.post('/', async (req, res) => {
    const create =  await createBook(req.body);
    res.send(create);
})

app.get('/:bookid', async (req, res) => {
    const {bookid} = req.params;
    const book = await getBook(bookid);
    res.send(book);
});

app.put('/:bookid', async (req, res) => {
    const { bookid  } = req.params;
    const book = await updateBook(bookid, req.body);
    res.send(book);
})

app.delete('/:bookid', async (req, res) => {
    const { bookid } = req.params;
    const deletedbook = await deleteBook(bookid);
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});