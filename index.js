const {query} = require('express')
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const db = require('./src/helpers/db')
const routerTalent = require('./src/routers/talent')
const bodyparser = require('body-parser');

//MiddleWare
app.use(bodyparser.urlencoded({extended: false}))
app.use('/talent', routerTalent)


app.get('/', (request, response) => {
    response.send('Welcome to Arkhire, Your Hiring Apps')
})


app.listen(port,() => {
    console.log(`Arkhire Express running at http://localhost:${port}`)
})