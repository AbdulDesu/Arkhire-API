const { Router } = require('express')
const { getTalentByID, filterTalentByName, filterTalentByLocation, filterTalentByTitle, filterTalentByWorkTime, updateTalent } = require('../controllers/talent')

const router = Router()

const { talentAuthorization } = require('../middleware/auth')
const uploadImage = require('../middleware/multer_talent')

router.get('/:talentID', talentAuthorization, getTalentByID)
router.get('/filter/name', talentAuthorization, filterTalentByName)
router.get('/filter/title', talentAuthorization, filterTalentByTitle)
router.get('/filter/location', talentAuthorization, filterTalentByLocation)
router.get('/filter/time', talentAuthorization, filterTalentByWorkTime)
router.put('/:talentID', talentAuthorization, uploadImage, updateTalent)

module.exports = router