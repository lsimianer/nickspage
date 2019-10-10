const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()

// import routes
const userRoutes = require('../routes/user.js');
const port = process.env.PORT || 8000

//db 
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('DB Connected'))

// routes middleware
app.use("/api", userRoutes)

// get('/' , (req, res) =>{
//     res.send('hello from node');
//     });
    

//  import mongooseconst mongoose = require('mongoose');
//   load env variablesconst dotenv = require('dotenv');dotenv.config() 
//   db connectionmongoose.connect(  process.env.MONGO_URI,  {useNewUrlParser: true}).then(() => console.log('DB Connected'))
//    mongoose.connection.on('error', err => {  console.log(`DB connection error: ${err.message}`)});



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://lsimianer:<password>@cluster0-7z1it.mongodb.net/admin?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });