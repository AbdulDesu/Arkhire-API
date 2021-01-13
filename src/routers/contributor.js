const { Router } = require('express')
const { getContributorRoom, getContributorID, getParticipator, createContributorRoom, deleteContributorRoom } = require('../controllers/contributor')

const router = Router()
const { allMemberAuthorization, talentAuthorization } = require('../middleware/auth')

router.get('/room/:contributor_owner', allMemberAuthorization, getContributorRoom)
router.get('/:contributorID', allMemberAuthorization, getContributorID)
router.get('/participator/:participator_owner', allMemberAuthorization, getParticipator)
router.post('/', allMemberAuthorization, createContributorRoom)
router.delete('/:contributorID', talentAuthorization, deleteContributorRoom)

module.exports = router