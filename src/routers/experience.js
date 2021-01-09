const { Router } = require('express')
const { getExperience, getExperienceByOwnerID, getExperienceByID, createExperience, updateExperience, deleteExperience } = require('../controllers/experience')

const router = Router()

const { allMemberAuthorization, talentAuthorization } = require('../middleware/auth')

router.get('/', allMemberAuthorization, getExperience)
router.get('/owner/:experience_owner', allMemberAuthorization, getExperienceByOwnerID)
router.get('/:experienceID', allMemberAuthorization, getExperienceByID)
router.post('/postxperience', talentAuthorization, createExperience)
router.put('/:experienceID', talentAuthorization, updateExperience)
router.delete('/:experienceID', talentAuthorization, deleteExperience)

module.exports = router