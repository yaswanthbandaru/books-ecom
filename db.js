// database connection
const mongoose = require('mongoose');

function connectDB() {

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

}

module.exports = connectDB;