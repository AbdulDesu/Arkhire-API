const { Router } = require('express')
const { getAllTalentData } = require('../controllers/allTalentData')

const router = Router()

const { talentAuthorization } = require('../middleware/auth')

router.get('/', talentAuthorization, getAllTalentData)

module.exports = router