const { getAllTalentModel, getTalentByIDModel, createTalentModel, deleteTalentModel, putTalentModel, patchTalentModel} = require('../models/talent')

module.exports = {
    getAllTalent: (req, res) => {
      let { search, limit, page } = req.query
      let searchKey = ''
      let searchValue = ''
  
      if (typeof search === 'object') {
        searchKey = Object.keys(search)[0]
        searchValue = Object.values(search)[0]
      } else {
        searchKey = 'name'
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
  
      getAllTalentModel(searchKey, searchValue, limit, offset, result => {
        if (result.length) {
          res.status(200).send({
            success: true,
            message: 'Talent List',
            data: result
          })
        } else {
          res.status(404).send({
            success: false,
            message: 'Talent Not Found!'
          })
        }
      })
    },
    getTalentByID: async (req,res) => {
      try {
        const { talentID } = req.params
  
        const result = await getTalentByIDModel(talentID)
        if (result.length) {
          res.status(200).send({
            success: true,
            message: `Talent with id ${talentID}`,
            data: result[0]
          })
        } else {
          res.status(404).send({
            success: false,
            message: `Talent data with id ${talentID} Not Found!`
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

    createTalent: async (req,res) => {
      try {
        const { name, email, noHp, password, status, createdAt, updatedAt } = req.body
        const result = await createTalentModel(name, email, noHp, password, status, createdAt, updatedAt)
        if (result.affectedRows) {
          res.status(200).send({
            success: true,
            message: 'Talent added succesfully'
          })
        } else {
          res.status(400).send({
            success: false,
            message: 'Failed to add talent'
          })
        }
      } catch (error) {
        res.status(500).send({
          success: false,
          message: 'Internal Server Error, Please try again later'
        })
      }
    },

    deleteTalent: async (req,res) => {
      try {
        const {talentID} = req.params

        const resSelect = await getTalentByIDModel (talentID)
        if (resSelect.length) {
          const resDelete = await deleteTalentModel(talentID)
          if (resDelete.affectedRows) {
            res.status(200).send({
              success: true,
              message: `Talent With id ${talentID} has been deleted succesfully`
            })
          } else {
            res.status(404).send({
              success: false,
              message: 'Failed to delete talent'
            })
          }
        } else {
          res.status(404).send({
            success: false,
            message: `Talent with id ${talentID} not found`
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

    putTalent: async (req,res) => {
      try {
        const { talentID } = req.params
        const { name, email, noHp, password, status, updatedAt } = req.body
  
        if (name.trim() && email.trim() &&  noHp.trim() && password.trim() && status.trim() && updatedAt.trim()) {
          const resSelect = await getTalentByIDModel(talentID)
          if (resSelect.length) {
            const resUpdate = await putTalentModel(talentID, name, email, noHp, password, status, updatedAt)
            if (resUpdate.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Talent with id ${talentID} updated succesfully`
              })
            } else {
              res.status(404).send({
                success: false,
                message: 'Talent update failed'
              })
            }
          } else {
            res.status(404).send({
              success: false,
              message: `Talent with id ${talentID} not found`
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

    patchTalent: async (req, res) => {
      try {
        const { talentID } = req.params
        const {
          name = '', 
          email = '', 
          noHp = '', 
          password = '', 
          status = '', 
          updatedAt = ''
        } = req.body
  
        if (name.trim() || email.trim() ||  noHp.trim() || password.trim() || status.trim() || updatedAt.trim()) {
          const resSelect = await getTalentByIDModel(talentID)
          if (resSelect.length) {
            const dataColumn = Object.entries(req.body).map(item => {
              const queryDynamic = parseInt(item[1]) > 0 ? `${item[0] = item[1]}` : `${item[0]}='${item[1]}'`
              return queryDynamic
            })
  
            const resUpdate = await patchTalentModel(dataColumn, talentID)
            if (resUpdate.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Talent with id ${talentID} updated succesfully`
              })
            } else {
              res.status(400).send({
                success: false,
                message: 'Talent data failed to update'
              })
            }
          } else {
            res.status(404).send({
              success: false,
              message: `Talent with id ${talentID} not found`
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
  