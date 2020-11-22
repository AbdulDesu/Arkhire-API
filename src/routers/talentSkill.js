const { Router } = require('express')
const { getAllTalentSkill, getTalentSkillByTalentID , updateTalentSkill } = require('../controllers/talentSkill')

const router = Router()

const { talentAuthorization } = require('../middleware/auth')

router.get('/', talentAuthorization, getAllTalentSkill)
router.get('/:talentID', talentAuthorization, getTalentSkillByTalentID)
router.put('/:talentID', talentAuthorization, updateTalentSkill)

module.exports = router
