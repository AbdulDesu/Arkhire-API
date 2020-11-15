const { getAllTalentAddressModel, getTalentAddressByTalentIDModel, createTalentAddressModel , deleteTalentAddressModel, patchTalentAddressModel} = require('../models/talentAddress')
module.exports = {

  getAllTalentAddress: (req, res) => {
    let { search, limit, page } = req.query
    let searchKey = ''
    let searchValue = ''

    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'talentName'
      searchValue = search || ''
    }

    if (!limit) {
      limit = 50
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const offset = (page - 1) * limit

    getAllTalentAddressModel(searchKey, searchValue, limit, offset, result => {
        if (result.length) {
          res.status(200).send({
            success: true,
            message: 'Talent Address List',
            data: result
          })
        } else {
          res.status(404).send({
            success: false,
            message: 'Talent Address Not Found!'
          })
        }
      })
    },

    getTalentAddressByTalentID: async (req,res) => {
      try {
        const { talentID } = req.params
  
        const result = await getTalentAddressByTalentIDModel(talentID)
        if (result.length) {
          res.status(200).send({
            success: true,
            message: `Address Talent with id ${talentID}`,
            data: result[0]
          })
        } else {
          res.status(404).send({
            success: false,
            message: `Address Talent data with id ${talentID} Not Found!`
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

    createTalentAddress: async (req,res) => {
      try {
        const { talentName, talentAddress, updatedAt } = req.body
        const result = await createTalentAddressModel(talentName, talentAddress, updatedAt)
        if (result.affectedRows) {
          res.status(200).send({
            success: true,
            message: 'Talent Address added succesfully'
          })
        } else {
          res.status(400).send({
            success: false,
            message: 'Failed to add talent address'
          })
        }
      } catch (error) {
        res.status(500).send({
          success: false,
          message: 'Internal Server Error, Please try again later'
        })
      }
    },

    deleteTalentAddress: async (req,res) => {
      try {
        const {talentID} = req.params

        const resSelect = await getTalentAddressByTalentIDModel (talentID)
        if (resSelect.length) {
          const resDelete = await deleteTalentAddressModel(talentID)
          if (resDelete.affectedRows) {
            res.status(200).send({
              success: true,
              message: `Talent address With id ${talentID} has been deleted succesfully`
            })
          } else {
            res.status(404).send({
              success: false,
              message: 'Failed to delete talent address'
            })
          }
        } else {
          res.status(404).send({
            success: false,
            message: `Talent address with id ${talentID} not found`
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

    putTalentAddress: async (req,res) => {
      try {
        const { talentID } = req.params
        const { talentName, talentAddress, updatedAt } = req.body
  
        if (talentName.trim() && talentAddress.trim() && updatedAt.trim()) {
          const resSelect = await getTalentAddressByTalentIDModel(talentID)
          if (resSelect.length) {
            const resUpdate = await putTalentAddressModel(talentID, talentName, talentAddress, updatedAt)
            if (resUpdate.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Talent address with id ${talentID} updated succesfully`
              })
            } else {
              res.status(404).send({
                success: false,
                message: 'Talent address update failed'
              })
            }
          } else {
            res.status(404).send({
              success: false,
              message: `Talent address with id ${talentID} not found`
            })
          }
        } else {
          res.status(400).send({
            success: false,
            message: 'Please fill all field!'
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

    patchTalentAddress: async (req, res) => {
      try {
        const { talentID } = req.params
        const {
          talentName = '', 
          talentAddress = '', 
          updatedAt = ''
        } = req.body
  
        if (talentName.trim() || talentAddress.trim() || updatedAt.trim()) {
          const resSelect = await getTalentByIDModel(talentID)
          if (resSelect.length) {
            const dataColumn = Object.entries(req.body).map(item => {
              const queryDynamic = parseInt(item[1]) > 0 ? `${item[0] = item[1]}` : `${item[0]}='${item[1]}'`
              return queryDynamic
            })
  
            const resUpdate = await patchTalentAddressModel(dataColumn, talentID)
            if (resUpdate.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Talent Address with id ${talentID} updated succesfully`
              })
            } else {
              res.status(400).send({
                success: false,
                message: 'Talent Address data failed to update'
              })
            }
          } else {
            res.status(404).send({
              success: false,
              message: `Talent address with id ${talentID} not found`
            })
          }
        } else {
          res.status(400).send({
            success: false,
            message: 'Please, Fill all field!'
          })
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