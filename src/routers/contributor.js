const { Router } = require('express')
const { getContributorRoom, getContributorID, deleteContributorRoom } = require('../controllers/contributor')

const router = Router()
const { allMemberAuthorization, talentAuthorization } = require('../middleware/auth')

router.get('/room/:contributor_owner', allMemberAuthorization, getContributorRoom)
router.get('/:contributorID', allMemberAuthorization, getContributorID)
router.delete('/:contributorID', talentAuthorization, deleteContributorRoom)

module.exports = router