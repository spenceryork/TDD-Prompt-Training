const express = require("express");
require("dotenv").config();
const app = express();
const routes = require("./routes/");
const bodyParser = require("body-parser");

console.log('Hello from Slothful Sheep');


// Middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(`/api/v1/`, routes);


// Error Handling

app.use( (req, res, next) => {
    let error = new Error('Not Found');
    error.status = 404;
    next(error)
});

app.use( (error, req, res, next) => {
    res.status( error.status || 500 );
    res.json({
        message: "Errors everywhere!",
        error: error.message
    });
});

// Port and Server

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});