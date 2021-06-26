const express= require('express');
const app= express();

const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const cors= require('cors');
require('dotenv/config');

const PORT= 3210;

//import routes here
const apiRoute= require('./routes/crudOperations');

//add middlewares here
app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use('/api', apiRoute);

//connect to DB here
mongoose.connect(
    process.env.DB_CONNECTION_URI,
    { useNewUrlParser: true },// was asked to add this from the deprecation warning log
    () => { //callback function
        console.log("\n\n===============================================\n| Connected to MongoDB with admin credentials |\n===============================================");
    });

//configure app to use port
app.listen(PORT, () => {
    console.log("Listening at port " + PORT);
});