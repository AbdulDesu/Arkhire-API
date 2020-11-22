const { Router } = require('express')
const { checkProjectResponse } = require('../controllers/projectresp')

const router = Router()
const { companyAuthorization } = require('../middleware/auth')

router.get('/', companyAuthorization, checkProjectResponse)

module.exports = router