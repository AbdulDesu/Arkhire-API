const { Router } = require('express')
const { getAllProject, getProjectByID, createProject, createNewProject, deleteProject, deleteNewProject, updateProject} = require('../controllers/project')

const router = Router()

const { companyAuthorization, allMemberAuthorization } = require('../middleware/auth')

router.get('/', allMemberAuthorization, getAllProject)
router.get('/:projectID', allMemberAuthorization, getProjectByID)
router.post('/', companyAuthorization, createProject)
router.post('/new', companyAuthorization, createNewProject)
router.delete('/:projectID', companyAuthorization, deleteProject)
router.delete('/new/:projectID', companyAuthorization, deleteNewProject)
router.put('/:projectID', companyAuthorization, updateProject)

module.exports = router