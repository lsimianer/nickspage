const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require('express-validator')
require('dotenv').config()
// import routes
const userRoutes = require('../routes/user.js');
//database connection
    mongoose.connect(process.env.DATABASE, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }).then(() => console.log('DB Connected'))

//app 
const app = express();
//middlwares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());


// routes middleware
app.use("/api", userRoutes)
//db 


// app.post("/signup", function (req, res) {
//     console.log(req.body);
//     res.send({
//         status: 'SUCCESS'
//     });
// });





const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})