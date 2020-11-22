const { Router } = require('express')
const { getAllOffer, getOfferingByID, updateOffer } = require('../controllers/hireprogress')

const router = Router()

const { talentAuthorization } = require('../middleware/auth')

router.get('/', talentAuthorization, getAllOffer)
router.get('/:offeringID', talentAuthorization, getOfferingByID)
router.put('/:offeringID', talentAuthorization, updateOffer)
module.exports = router