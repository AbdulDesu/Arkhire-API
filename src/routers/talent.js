const { Router } = require('express')
const { getAllTalent, getTalentByID, createTalent } = require('../controllers/talent')

const router = Router()

router.get('/', getAllTalent)
router.get('/:talentID', getTalentByID)
router.post('/', createTalent)

module.exports = router