const { Router } = require('express')
const { getAllTalent, getTalentByID, createTalent, deleteTalent, putTalent, patchTalent } = require('../controllers/talent')

const router = Router()

router.get('/', getAllTalent)
router.get('/:talentID', getTalentByID)
router.post('/', createTalent)
router.delete('/:talentID', deleteTalent)
router.put('/:talentID', putTalent)
router.patch('/:talentID', patchTalent)

module.exports = router
