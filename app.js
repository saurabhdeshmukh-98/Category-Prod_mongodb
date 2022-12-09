const express = require('express')
const app= express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const mongoose=require('mongoose')
const router= require('./router/router')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',router)

app.listen(process.env.PORT, () => {
    console.log(`server is running on port number:${process.env.PORT}`)
});
