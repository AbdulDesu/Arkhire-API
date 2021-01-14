const { Router } = require('express')
const { getAllOffer, getOfferingByID, updateOffer, createOffer } = require('../controllers/hireprogress')

const router = Router()

const { talentAuthorization, companyAuthorization } = require('../middleware/auth')

router.get('/', talentAuthorization, getAllOffer)
router.get('/:offeringID', talentAuthorization, getOfferingByID)
router.put('/:offeringID', talentAuthorization, updateOffer)
router.post('/', companyAuthorization, createOffer)
module.exports = router