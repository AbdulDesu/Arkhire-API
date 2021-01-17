const { Router } = require('express')
const { getAllProject, getProjectByID, getProjectByOwner, createNewProject, deleteNewProject, updateProject, updateProjectWithoutImage} = require('../controllers/project')

const router = Router()

const { companyAuthorization, allMemberAuthorization } = require('../middleware/auth')
const uploadImage = require('../middleware/multer_project')

router.get('/', allMemberAuthorization, getAllProject)
router.get('/:projectID', allMemberAuthorization, getProjectByID)
router.get('/owner/:project_owner', allMemberAuthorization, getProjectByOwner)
router.post('/new', companyAuthorization, uploadImage, createNewProject)
router.delete('/new/:projectID', companyAuthorization, deleteNewProject)
router.put('/:projectID', companyAuthorization, uploadImage, updateProject)
router.put('/text/:projectID', companyAuthorization, updateProjectWithoutImage)


module.exports = router