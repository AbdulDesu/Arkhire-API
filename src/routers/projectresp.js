const { Router } = require('express')
const { checkProjectResponse, checkNewerProjectResponse } = require('../controllers/projectresp')

const router = Router()
const { allMemberAuthorization } = require('../middleware/auth')

router.get('/', allMemberAuthorization, checkProjectResponse)
router.get('/newer', allMemberAuthorization, checkNewerProjectResponse)

module.exports = router