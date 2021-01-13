const { getAllProjectModel, getProjectByIDModel, createProjectModel, createNewProjectModel, deleteProjectByIDModel, deleteNewProjectByIDModel, updateProjectByIDModel } = require('../models/project')

module.exports = {
    getAllProject: (req, res) => {
        let { search, limit, page } = req.query
        let searchKey = ''
        let searchValue = ''
    
        if (typeof search === 'object') {
          searchKey = Object.keys(search)[0]
          searchValue = Object.values(search)[0]
        } else {
          searchKey = 'project_tittle'
          searchValue = search || ''
        }
    
        if (!limit) {
          limit = 10
        } else {
          limit = parseInt(limit)
        }
    
        if (!page) {
          page = 1
        } else {
          page = parseInt(page)
        }
    
        const offset = (page - 1) * limit
    
        getAllProjectModel(searchKey, searchValue, limit, offset, result => {
          if (result.length) {
            res.status(200).send({
              success: true,
              message: 'Project List',
              data: result
            })
          } else {
            res.status(404).send({
              success: false,
              message: 'Project Not Found!'
            })
          }
        })
      },

      getProjectByID: async (req, res) => {
        try {
          const { projectID } = req.params
    
          const result = await getProjectByIDModel(projectID)
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Project with id ${projectID}`,
              data: result[0]
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Project data with id ${projectID} Not Found!`
            })
          }
        } catch (error) {
          console.log(error)
          req.status(500).send({
            success: false,
            message: 'Internal server error, Please try again later'
          })
        }
      },

      createProject: async (req, res) => {
        try {
          const result = await createProjectModel(req.body)
          if (result.affectedRows) {
            res.status(200).send({
              success: true,
              message: 'Project added, Sending to talent.. Succes!'
            })
          } else {
            res.status(400).send({
              success: false,
              message: 'Failed to add project'
            })
          }
        } catch (error) {
          console.log(error)
          res.status(500).send({
            success: false,
            message: 'Internal Server Error, Please try again later'
          })
        }
      },

      createNewProject: async (req, res) => {
        try {
          const result = await createNewProjectModel(req.body)
          if (result.affectedRows) {
            res.status(200).send({
              success: true,
              message: 'Project added !'
            })
          } else {
            res.status(400).send({
              success: false,
              message: 'Failed to add project'
            })
          }
        } catch (error) {
          console.log(error)
          res.status(500).send({
            success: false,
            message: 'Internal Server Error, Please try again later'
          })
        }
      },

      deleteProject: async (req, res) => {
        try {
          const { projectID } = req.params
    
          const resSelect = await getProjectByIDModel(projectID)
          if (resSelect.length) {
            const resDelete = await deleteProjectByIDModel(projectID)
            if (resDelete.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Project With id ${projectID} has been deleted succesfully`
              })
            } else {
              res.status(404).send({
                success: false,
                message: 'Failed to delete project'
              })
            }
          } else {
            res.status(404).send({
              success: false,
              message: `Project with id ${projectID} not found`
            })
          }
        } catch (error) {
          console.log(error)
          req.status(500).send({
            success: false,
            message: 'Internal server error, Please Try Again Later'
          })
        }
      },

      deleteNewProject: async (req, res) => {
        try {
          const { projectID } = req.params
    
          const resSelect = await getProjectByIDModel(projectID)
          if (resSelect.length) {
            const resDelete = await deleteProjectByIDModel(projectID)
            if (resDelete.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Project With id ${projectID} has been deleted succesfully`
              })
            } else {
              res.status(404).send({
                success: false,
                message: 'Failed to delete project'
              })
            }
          } else {
            res.status(404).send({
              success: false,
              message: `Project with id ${projectID} not found`
            })
          }
        } catch (error) {
          console.log(error)
          req.status(500).send({
            success: false,
            message: 'Internal server error, Please Try Again Later'
          })
        }
      },

      updateProject: async (req, res, _fields) => {
        try {
          const { projectID } = req.params
          const catchData = await getProjectByIDModel(projectID)
    
          if (catchData.length) {
            const result = await updateProjectByIDModel(projectID, req.body)
    
            if (result.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Project with id ${projectID} Updated succesfully`,
              })
            } else {
              console.log(error)
              res.status(404).send({
                success: false,
                message: 'Talent Not Found!'
              })
            }
          }
        } catch (error) {
          console.log(error)
          req.status(500).send({
          success: false,
          message: 'Internal server error, Please try again later!'
          })
        }
      }
}