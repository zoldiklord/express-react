const express = require('express');
const mongoose =require('mongoose');
const router = require('./routes/api/items');
var cors = require('cors')
require('dotenv').config()

const app = express()

/****************middlewares**********************/ 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


/***********db*********/
const db = process.env.MONGOURL

mongoose.connect(db)
        .then(()=>{console.log("Connected to db ...")})
        .catch(()=>{err => console.log(err)})

app.use(router)
const port = process.env.PORT || 5000

app.listen(port,()=>{console.log(`Listening on port ${port} ...`)})
