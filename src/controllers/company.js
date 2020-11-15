const { getAllCompanyModel, getCompanyByIDModel, createCompanyModel, deleteCompanyModel, putCompanyModel, patchCompanyModel } = require('../models/company')

module.exports = {
    getAllCompany: (req, res) => {
        let { search, limit, page } = req.query
        let searchKey = ''
        let searchValue = ''
    
        if (typeof search === 'object') {
          searchKey = Object.keys(search)[0]
          searchValue = Object.values(search)[0]
        } else {
          searchKey = 'companyName'
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
  
      getAllCompanyModel(searchKey, searchValue, limit, offset, result => {
        if (result.length) {
          res.status(200).send({
            success: true,
            message: 'Company List',
            data: result
          })
        } else {
          res.status(404).send({
            success: false,
            message: 'Company Not Found!'
          })
        }
      })
    },

    getCompanyByID: async (req,res) => {
        try {
          const { companyID } = req.params
    
          const result = await getCompanyByIDModel(companyID)
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Company with id ${companyID}`,
              data: result[0]
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Company data with id ${companyID} Not Found!`
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

    createCompany: async (req,res) => {
      try {
        const { name, email, password, noHp, companyName, companyPosition, status, createdAt, updatedAt } = req.body
        const result = await createCompanyModel(name, email, password, noHp, companyName, companyPosition, status, createdAt, updatedAt)
        if (result.affectedRows) {
          res.status(200).send({
            success: true,
            message: 'Company added succesfully'
          })
        } else {
          res.status(400).send({
            success: false,
            message: 'Failed to add company'
          })
        }
      } catch (error) {
        res.status(500).send({
          success: false,
          message: 'Internal Server Error, Please try again later'
        })
      }
    },

    deleteCompany: async (req,res) => {
        try {
          const {companyID} = req.params
  
          const resSelect = await getCompanyByIDModel (companyID)
          if (resSelect.length) {
            const resDelete = await deleteCompanyModel(companyID)
            if (resDelete.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Company With id ${companyID} has been deleted succesfully`
              })
            } else {
              res.status(404).send({
                success: false,
                message: 'Failed to delete company'
              })
            }
          } else {
            res.status(404).send({
              success: false,
              message: `Company with id ${companyID} not found`
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

    putCompany: async (req,res) => {
      try {
        const { companyID } = req.params
        const { name, email, password, noHp, companyName, companyPosition, status, updatedAt } = req.body
  
        if (name.trim() && email.trim() && password.trim() && noHp.trim() && companyName.trim() && companyPosition.trim() && status.trim() && updatedAt.trim()) {
          const resSelect = await getCompanyByIDModel(companyID)
          if (resSelect.length) {
            const resUpdate = await putCompanyModel(companyID, name, email, password, noHp, companyName, companyPosition, status, updatedAt)
            if (resUpdate.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Company with id ${companyID} updated succesfully`
              })
            } else {
              res.status(404).send({
                success: false,
                message: 'Company update failed'
              })
            }
          } else {
            res.status(404).send({
              success: false,
              message: `Company with id ${companyID} not found`
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

    patchCompany: async (req, res) => {
        try {
          const { companyID } = req.params
          const {
            name = '', 
            email = '', 
            password = '', 
            noHp = '', 
            companyName = '', 
            companyPosition = '', 
            status = '',  
            updatedAt = ''
          } = req.body
    
          if (name.trim() || email.trim() || password.trim() || noHp.trim() || companyName.trim() || companyPosition.trim() || status.trim() || updatedAt.trim()) {
            const resSelect = await getCompanyByIDModel(companyID)
            if (resSelect.length) {
              const dataColumn = Object.entries(req.body).map(item => {
                const queryDynamic = parseInt(item[1]) > 0 ? `${item[0] = item[1]}` : `${item[0]}='${item[1]}'`
                return queryDynamic
              })
    
              const resUpdate = await patchCompanyModel(dataColumn, companyID)
              if (resUpdate.affectedRows) {
                res.status(200).send({
                  success: true,
                  message: `Company with id ${companyID} updated succesfully`
                })
              } else {
                res.status(400).send({
                  success: false,
                  message: 'Company data failed to update'
                })
              }
            } else {
              res.status(404).send({
                success: false,
                message: `Company with id ${companyID} not found`
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
