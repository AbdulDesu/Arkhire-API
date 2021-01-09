const { Router } = require('express')
const { getAllCompany, getCompanyByAccountID, getCompanyByID, createCompany, updateCompany } = require('../controllers/company')
const router = Router()

const { companyAuthorization, allMemberAuthorization } = require('../middleware/auth')
const uploadCompanyImage = require('../middleware/multer_company')

router.get('/', allMemberAuthorization, getAllCompany)
router.get("/holder/:accountID", allMemberAuthorization, getCompanyByAccountID)
router.get('/:companyID', allMemberAuthorization, getCompanyByID)
router.post('/', companyAuthorization, createCompany)
router.put('/:companyID',  companyAuthorization, uploadCompanyImage, updateCompany)

module.exports = router
