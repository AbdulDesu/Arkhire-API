const { Router } = require('express')
const { getAllProject, getProjectByID, createProject, createNewProject, deleteProject, deleteNewProject, updateProject, updateProjectWithImage} = require('../controllers/project')

const router = Router()

const { companyAuthorization, allMemberAuthorization } = require('../middleware/auth')
const uploadImage = require('../middleware/multer_project')

router.get('/', allMemberAuthorization, getAllProject)
router.get('/:projectID', allMemberAuthorization, getProjectByID)
router.post('/', companyAuthorization, createProject)
router.post('/new', companyAuthorization, uploadImage, createNewProject)
router.delete('/:projectID', companyAuthorization, deleteProject)
router.delete('/new/:projectID', companyAuthorization, deleteNewProject)
router.put('/:projectID', companyAuthorization, updateProject)
router.put('/newimages/:projectID', companyAuthorization, uploadImage, updateProjectWithImage)

module.exports = router