const { Router } = require('express')
const { getAllTalentSkill, getTalentSkillByTalentID, createTalentSkill, deleteTalentSkill, putTalentSkill, patchTalentSkill } = require('../controllers/talentSkill')

const router = Router()

router.get('/', getAllTalentSkill)
router.get('/:talentID', getTalentSkillByTalentID)
router.post('/', createTalentSkill)
router.delete('/:talentID', deleteTalentSkill)
router.put('/:talentID', putTalentSkill)
router.patch('/:talentID', patchTalentSkill)

module.exports = router
