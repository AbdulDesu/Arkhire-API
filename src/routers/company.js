const { Router } = require('express')
const { getAllCompany, getCompanyByID, createCompany, deleteCompany, putCompany, patchCompany } = require('../controllers/company')

const router = Router()

router.get('/', getAllCompany)
router.get('/:companyID', getCompanyByID)
router.post('/', createCompany)
router.delete('/:companyID', deleteCompany)
router.put('/:companyID', putCompany)
router.patch('/:companyID', patchCompany)

module.exports = router
