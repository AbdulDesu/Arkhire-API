const { Router } = require('express')
const { getTalentByID, filterTalentByName, filterTalentByLocation, filterTalentByTitle, filterTalentByWorkTime, updateTalent } = require('../controllers/talent')

const router = Router()

const { talentAuthorization, allMemberAuthorization } = require('../middleware/auth')
const uploadImage = require('../middleware/multer_talent')

router.get('/:talentID', allMemberAuthorization, getTalentByID)
router.get('/filter/name', allMemberAuthorization, filterTalentByName)
router.get('/filter/title', allMemberAuthorization, filterTalentByTitle)
router.get('/filter/location', allMemberAuthorization, filterTalentByLocation)
router.get('/filter/time', allMemberAuthorization, filterTalentByWorkTime)
router.put('/:talentID', talentAuthorization, uploadImage, updateTalent)

module.exports = router