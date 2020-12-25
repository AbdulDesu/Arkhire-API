const { Router } = require('express')
const { checkProjectResponse } = require('../controllers/projectresp')

const router = Router()
const { allMemberAuthorization } = require('../middleware/auth')

router.get('/', allMemberAuthorization, checkProjectResponse)

module.exports = router