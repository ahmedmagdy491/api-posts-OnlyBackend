const express =require('express');
const app = express();

const mongoose = require('mongoose');
// REQUIRE BODY PARSER
const bodyParser = require('body-parser');

//REQUIRE ENVIRONMENTS
require('dotenv/config');

//USE BODY PARSER
app.use(bodyParser.json());
// IMPORT ROUTES
const postRoutes = require('./routes/posts');

// USE POST ROUTE BY MIDDLEWEAR
app.use('/post', postRoutes);


//Routes
app.get('/',(req, res)=>{
    res.send('hi in home page')
})


mongoose.connect( process.env.DB_CONNECTION ,{ useUnifiedTopology: true ,useNewUrlParser: true } ,(err, result)=>{
       if(err){console.error(err)}
        console.log('connected to database')
    })

app.listen(3000,()=>{
    console.log('listening on port 3000')
})