const { Router } = require('express')
const { getAllTalentAchivement, getAchivementByTalentID, updateTalentAchivement} = require ('../controllers/achivement')

const router = Router()

const { talentAuthorization } = require('../middleware/auth')
const uploadImage = require('../middleware/multer_talent_cv')

router.get('/', talentAuthorization, getAllTalentAchivement)
router.get('/:talentID', talentAuthorization, getAchivementByTalentID )
router.put('/:talentID', talentAuthorization, uploadImage, updateTalentAchivement)

module.exports = router