const { Router } = require('express')
const { getAllCompany, getCompanyByID, createCompany, updateCompany } = require('../controllers/company')
const router = Router()

const { companyAuthorization, allMemberAuthorization } = require('../middleware/auth')
const uploadImage = require('../middleware/multer_company')

router.get('/', allMemberAuthorization, getAllCompany)
router.get('/:companyID',  allMemberAuthorization, getCompanyByID)
router.post('/',  companyAuthorization, createCompany)
router.put('/:companyID',  companyAuthorization, uploadImage, updateCompany)

module.exports = router
