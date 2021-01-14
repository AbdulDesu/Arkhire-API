const { Router } = require('express')
const { getAllProjectResponse, getProjectResponseByOwnerID, getProjectResponseByTargetID, getProjectHighlight, } = require('../controllers/projectresp')

const router = Router()
const { allMemberAuthorization } = require('../middleware/auth')

router.get('/', allMemberAuthorization, getAllProjectResponse)
router.get('/owner/:project_owner', allMemberAuthorization, getProjectResponseByOwnerID)
router.get('/highlight/:participator_owner', allMemberAuthorization, getProjectHighlight)

module.exports = router