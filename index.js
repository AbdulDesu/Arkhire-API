require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const routerAccount = require('./src/routers/account')
const routerTalent = require('./src/routers/talent')
const routerCompany = require('./src/routers/company')
const routerProject = require('./src/routers/project')
const routerTalentResponse = require('./src/routers/hireprogress')
const routerTalentSkill = require('./src/routers/talentSkill')
const routerTalentAchivement = require('./src/routers/achivement')
const routerTalentExperience = require('./src/routers/experience')
const routerTalentPortfolio = require('./src/routers/portfolio')
const routercheckTalentResponse = require('./src/routers/projectresp')

const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')

// MiddleWare
app.use(bodyparser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

// All Router
app.use('/account', routerAccount)
app.use('/talent', routerTalent)
app.use('/company', routerCompany)
app.use('/project', routerProject)
app.use('/talentresp', routerTalentResponse)
app.use('/talentskill', routerTalentSkill)
app.use('/talentExperience', routerTalentExperience)
app.use('/achivement', routerTalentAchivement)
app.use('/portfolio', routerTalentPortfolio)
app.use('/projectresp', routercheckTalentResponse)

// CORS Config
app.use((req, res, next) => {
  res.header('Acces-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

app.use('/image', express.static('./uploads'))

app.get('/', (request, response) => {
  response.send('Welcome to Arkhire, Your Hiring Apps')
})

app.listen(port, () => {
  console.log(`Arkhire Express running at http://localhost:${port}`)
})
