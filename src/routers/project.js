const { Router } = require('express')
const { getAllProject, getProjectByID, createProject, deleteProject, updateProject} = require('../controllers/project')

const router = Router()

const { companyAuthorization, allMemberAuthorization } = require('../middleware/auth')

router.get('/', allMemberAuthorization, getAllProject)
router.get('/:projectID', allMemberAuthorization, getProjectByID)
router.post('/', companyAuthorization, createProject)
router.delete('/:projectID', companyAuthorization, deleteProject)
router.put('/:projectID', companyAuthorization, updateProject)

module.exports = router