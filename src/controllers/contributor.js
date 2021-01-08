const { getContributorModel, getContributorByIDModel, deleteContributorModel } = require('../models/contributor')

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
      }
}