const {query} = require('express')
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const routerTalent = require('./src/routers/talent')
const routerCompany = require('./src/routers/company')
const routerTalentSkill = require('./src/routers/talentSkill')
const routerTalentAddress = require('./src/routers/talentAddress')
const bodyparser = require('body-parser');

//MiddleWare
app.use(bodyparser.urlencoded({extended: false}))
app.use('/talent', routerTalent)
app.use('/company', routerCompany)
app.use('/talentskill', routerTalentSkill)
app.use('/talentaddress', routerTalentAddress)


app.get('/', (request, response) => {
    response.send('Welcome to Arkhire, Your Hiring Apps')
})

app.listen(port,() => {
    console.log(`Arkhire Express running at http://localhost:${port}`)
})
