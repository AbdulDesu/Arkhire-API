const { Router } = require('express')
const { getAllCompany, searchCompany, getCompanyByAccountID, getCompanyByID, createCompany, updateCompany, updateCompanyWithoutImage } = require('../controllers/company')
const router = Router()

const { companyAuthorization, allMemberAuthorization } = require('../middleware/auth')
const uploadCompanyImage = require('../middleware/multer_company')

router.get('/', allMemberAuthorization, getAllCompany)
router.get('/filter/name', allMemberAuthorization, searchCompany)
router.get("/holder/:accountID", allMemberAuthorization, getCompanyByAccountID)
router.get('/:companyID', allMemberAuthorization, getCompanyByID)
router.post('/', companyAuthorization, createCompany)
router.put('/:companyID',  companyAuthorization, uploadCompanyImage, updateCompany)
router.put('/data/:companyID', companyAuthorization, updateCompanyWithoutImage)

module.exports = router
