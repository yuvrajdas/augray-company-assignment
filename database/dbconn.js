const mongoose = require('mongoose');

let conn = mongoose.connect('mongodb+srv://yuvrajdas:yuvrajdas@cluster0.8tzxn8b.mongodb.net/?retryWrites=true&w=majority');
conn.then(() => {
    console.log('Database connected successfully...');
})
conn.catch((error) => {
    console.log(error);
})