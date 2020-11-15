const { Router } = require('express')
const { getTalentFullData } = require('../controllers/talentFullData')

const router = Router()

router.get('/:talentID', getTalentFullData)

module.exports = router