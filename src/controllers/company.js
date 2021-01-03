const { getAllCompanyModel, getCompanyByIDModel, createCompanyModel, updateCompanyModel } = require('../models/company')

module.exports = {
  getAllCompany: (req, res) => {
    let { search, limit, page } = req.query
    let searchKey = ''
    let searchValue = ''

    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'company_name'
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

  getCompanyByID: async (req, res) => {
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

  createCompany: async (req, res) => {
    try {
      const { company_name, company_position, company_type, company_detail, company_latitude, company_longitude, company_linkedin, company_instagram, company_facebook, updatedAt } = req.body
      const result = await createCompanyModel(company_name, company_position, company_type, company_detail, company_latitude, company_longitude,  company_linkedin, company_instagram, company_facebook, updatedAt)
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

  updateCompany: async (req, res) => {
    const { companyID } = req.params
    req.body.company_image = req.file === undefined ? '' : req.file.filename

    const data = {
      ...req.body,
      company_image: req.body.company_image
    }
    delete data.company_image
    
    try {

      const caughtData = await getCompanyByIDModel(companyID)

      if (caughtData.length) {
        const result = await updateCompanyModel(companyID, req.body)
          if (result.affectedRows) {
            res.status(200).send({
              success: true,
              message: `Company with id ${companyID} updated succesfully`
            })
          } else {
            res.status(400).send({
              success: false,
              message: 'Failed to update company'
            })
          }
        } else {
          res.status(404).send({
            success: false,
            message: `Company data with id ${companyID} Not Found!`
          })
        }      
      } catch (error) {
        res.status(500).send({
          success: false,
          message: 'Internal Server Error, Please try again later'
        })
      } 
    }
}
