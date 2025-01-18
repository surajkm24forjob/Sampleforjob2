require('dotenv').config({path:'./.env'});
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors')

const corsUrl = process.env.apiUrl;
const Port = process.env.PORT;

app.use(cors({
    origin: `${corsUrl}`,
    credentials: true,
}))

mongoose.connect(process.env.apiMONGODB_URI, {
   
});


app.use(express.json());


app.use('/backend', require('./routes'));



app.listen(Port, () => {
    console.log(`Server started on port ${Port}`);
});