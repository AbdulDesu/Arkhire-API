const { getExperienceModel, getExperienceByOwnerIDModel, getExperienceByIDModel, createExperienceModel, updateExperienceModel, deleteExperienceModel } = require('../models/experience')

module.exports = {
    getExperience: (req, res) => {
        let { search, limit, page } = req.query
        let searchKey = ''
        let searchValue = ''
    
        if (typeof search === 'object') {
          searchKey = Object.keys(search)[0]
          searchValue = Object.values(search)[0]
        } else {
          searchKey = 'experience_title'
          searchValue = search || ''
        }
    
        if (!limit) {
          limit = 15
        } else {
          limit = parseInt(limit)
        }
    
        if (!page) {
          page = 1
        } else {
          page = parseInt(page)
        }
    
        const offset = (page - 1) * limit
    
        getExperienceModel(searchKey, searchValue, limit, offset, result => {
          if (result.length) {
            res.status(200).send({
              success: true,
              message: 'Experience List',
              data: result
            })
          } else {
            res.status(404).send({
              success: false,
              message: 'Experience Not Found!'
            })
          }
        })
      },

      getExperienceByOwnerID: async (req, res) => {
        try {
          const { experience_owner } = req.params
    
          const result = await getExperienceByOwnerIDModel(experience_owner)
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Experience with owner id ${experience_owner}`,
              data: result
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Experience data with owner id ${experience_owner} Not Found!`
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

      getExperienceByID: async (req, res) => {
        try {
          const { experienceID } = req.params
    
          const result = await getExperienceByIDModel(experienceID)
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Experience with id ${experienceID}`,
              data: result[0]
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Experience data with id ${experienceID} Not Found!`
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

      createExperience: async (req, res) => {
        try {
          const result = await createExperienceModel(req.body)
          if (result.affectedRows) {
            res.status(200).send({
              success: true,
              message: 'Experience Created!'
            })
          } else {
            res.status(400).send({
              success: false,
              message: 'Failed to add experience'
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

      updateExperience: async (req, res, _fields) => {
        try {
          const { experienceID } = req.params
          const catchData = await getExperienceByIDModel(experienceID)
    
          if (catchData.length) {
            const result = await updateExperienceModel(experienceID, req.body)
    
            if (result.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Experience with id ${experienceID} Updated succesfully`,
              })
            } else {
              console.log(error)
              res.status(404).send({
                success: false,
                message: 'Experience data Not Found!'
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
      },

      deleteExperience: async (req, res) => {
        try {
          const { experienceID } = req.params
    
          const resSelect = await getExperienceByIDModel(experienceID)
          if (resSelect.length) {
            const resDelete = await deleteExperienceModel(experienceID)
            if (resDelete.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Experience With id ${experienceID} has been deleted succesfully`
              })
            } else {
              res.status(404).send({
                success: false,
                message: 'Failed to delete experience'
              })
            }
          } else {
            res.status(404).send({
              success: false,
              message: `Experience with id ${experienceID} not found`
            })
          }
        } catch (error) {
          console.log(error)
          req.status(500).send({
            success: false,
            message: 'Internal server error, Please Try Again Later'
          })
        }
      }
}