const { Router } = require('express')
const { getTalentByID, getTalentByAccountID, getReadyToHireTalent, filterTalentByName, filterTalentByLocation, filterTalentByTitle, filterTalentByWorkTime, updateTalent, updateTalentWithoutImage } = require('../controllers/talent')

const router = Router()

const { talentAuthorization, allMemberAuthorization } = require('../middleware/auth')
const uploadImage = require('../middleware/multer_talent')

router.get('/:talentID', allMemberAuthorization, getTalentByID)
router.get('/talentaccount/:accountID', allMemberAuthorization, getTalentByAccountID)
router.get('/filter/name', allMemberAuthorization, filterTalentByName)
router.get('/filter/title', allMemberAuthorization, filterTalentByTitle)
router.get("/", allMemberAuthorization, getReadyToHireTalent)
router.get('/filter/location', allMemberAuthorization, filterTalentByLocation)
router.get('/filter/time', allMemberAuthorization, filterTalentByWorkTime)
router.put('/:talentID', talentAuthorization, uploadImage, updateTalent)
router.put('/text/:talentID', talentAuthorization, updateTalentWithoutImage)

module.exports = router