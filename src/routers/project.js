const { Router } = require('express')
const { getAllProject, getProjectByID, createProject, deleteProject, updateProject} = require('../controllers/project')

const router = Router()

const { companyAuthorization } = require('../middleware/auth')

router.get('/', companyAuthorization, getAllProject)
router.get('/:projectID', companyAuthorization, getProjectByID)
router.post('/', companyAuthorization, createProject)
router.delete('/:projectID', companyAuthorization, deleteProject)
router.put('/:projectID', companyAuthorization, updateProject)

module.exports = router