const { Router } = require('express')
const { getAllTalentAddress, getTalentAddressByTalentID, createTalentAddress, deleteTalentAddress, putTalentAddress, patchTalentAddress } = require('../controllers/talentAddress')

const router = Router()

router.get('/', getAllTalentAddress)
router.get('/:talentID', getTalentAddressByTalentID)
router.post('/', createTalentAddress)
router.delete('/:talentID', deleteTalentAddress)
router.put('/:talentID', putTalentAddress)
router.patch('/talentID', patchTalentAddress)

module.exports = router