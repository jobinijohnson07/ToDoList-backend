const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const db = require("./config/prodAuthKey.js")

const app = express()

mongoose.connect(db.MONGODB_URL, {useNewUrlParser:true,useUnifiedTopology: true})
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...')
})

app.use(cors());
app.use(express.json())

const userRouter = require('./routers/users')
app.use('/users',userRouter)

app.listen(3000, () => {
    console.log('Server started')
})