const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000
const { getAllBooks, createBook, updateBook, getBook, deleteBook } = require('./services/bookServices');
const connectDB = require('./db');


// Connecting to database
connectDB();


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
    // const deletedbook = await deleteBook(bookid);
    res.send('deleting')
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});