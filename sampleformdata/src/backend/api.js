require('dotenv').config({path:'./.env'});
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors')




app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

mongoose.connect(process.env.apiMONGODB_URI, {
   
});


app.use(express.json());


app.use('/backend', require('./routes'));


const port = 3001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});