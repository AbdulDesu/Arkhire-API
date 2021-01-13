const { getContributorModel, getContributorByIDModel, getContributorByParticipatorID, createContributorModel, deleteContributorModel } = require('../models/contributor')

module.exports = {
    getContributorRoom: async (req, res) => {
        try {
          const { contributor_owner } = req.params
    
          const result = await getContributorModel(contributor_owner)
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Contributor List..`,
              data: result
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Contributor room not found`
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

      getContributorID: async (req, res) => {
        try {
          const { contributorID } = req.params
    
          const result = await getContributorByIDModel(contributorID)
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Contributor with id ${contributorID}`,
              data: result
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Contributor id not found`
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

      deleteContributorRoom: async (req, res) => {
        try {
          const { contributorID } = req.params
    
          const resSelect = await getContributorByIDModel(contributorID)
          if (resSelect.length) {
            const resDelete = await deleteContributorModel(contributorID)
            if (resDelete.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Contributor Room With id ${contributorID} has been deleted succesfully`
              })
            } else {
              res.status(404).send({
                success: false,
                message: 'Failed to delete portfolio'
              })
            }
          } else {
            res.status(404).send({
              success: false,
              message: `Contributor Room with id ${contributorID} not found`
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


      getParticipator: async (req, res) => {
        const { participator_owner } = req.params
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
        limit = 25
      } else {
        limit = parseInt(limit)
      }
  
      if (!page) {
        page = 1
      } else {
        page = parseInt(page)
      }
  
      const offset = (page - 1) * limit
  
        try {
          const result = await getContributorByParticipatorID(participator_owner , searchKey, searchValue, limit, offset)
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Project with participator account id ${participator_owner}`,
              data: result
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Project data with participator account id ${participator_owner} Not Found!`
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

      createContributorRoom: async (req, res) => {
        try {
          const result = await createContributorModel(req.body)
          if (result.affectedRows) {
            res.status(200).send({
              success: true,
              message: 'Room created !'
            })
          } else {
            res.status(400).send({
              success: false,
              message: 'Failed to create Room'
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
}