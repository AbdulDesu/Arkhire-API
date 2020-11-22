const { Router } = require('express')
const { getAllCompany, getCompanyByID, createCompany, updateCompany } = require('../controllers/company')
const router = Router()

const { companyAuthorization } = require('../middleware/auth')
const uploadImage = require('../middleware/multer_company')

router.get('/', companyAuthorization, getAllCompany)
router.get('/:companyID',  companyAuthorization, getCompanyByID)
router.post('/',  companyAuthorization, createCompany)
router.put('/:companyID',  companyAuthorization, uploadImage, updateCompany)

module.exports = router
