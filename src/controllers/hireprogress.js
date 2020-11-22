const { getAllOfferingModel, getOfferingByIDModel, updateOfferByIDModel } = require('../models/hireprogress')

module.exports = {
    getAllOffer: (req, res) => {
        let { search, limit, page } = req.query
        let searchKey = ''
        let searchValue = ''
    
        if (typeof search === 'object') {
          searchKey = Object.keys(search)[0]
          searchValue = Object.values(search)[0]
        } else {
          searchKey = 'hiring_status'
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
    
        getAllOfferingModel(searchKey, searchValue, limit, offset, result => {
          if (result.length) {
            res.status(200).send({
              success: true,
              message: 'Hiring Progress List',
              data: result
            })
          } else {
            res.status(404).send({
              success: false,
              message: 'Hiring Progress Not Found!'
            })
          }
        })
      },

      getOfferingByID: async (req, res) => {
        try {
          const { offeringID } = req.params
    
          const result = await getOfferingByIDModel(offeringID)
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Talent responses with offering id ${offeringID}`,
              data: result[0]
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Talent responses data with offering id ${offeringID} Not Found!`
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

      updateOffer: async (req, res, _fields) => {
        try {
          const { offeringID } = req.params
          const catchData = await getOfferingByIDModel(offeringID)
    
          if (catchData.length) {
            const result = await updateOfferByIDModel(offeringID, req.body)
    
            if (result.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Responses with id ${offeringID} Updated succesfully`,
              })
            } else {
              console.log(error)
              res.status(404).send({
                success: false,
                message: 'Offering ID Not Found!'
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