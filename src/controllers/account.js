const { getEmailAccountModel ,getAllAccountModel, getAccountByIDModel, createAccountModel, updateAccountModel} = require('../models/account')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
require('dotenv').config()


module.exports = {
  getAllAccount: (req, res) => {
    let { search, limit, page } = req.query
    let searchKey = ''
    let searchValue = ''

    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'account_name'
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

    getAllAccountModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Account List',
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'Account Not Found!'
        })
      }
    })
  },
  getAccountByID: async (req, res) => {
    try {
      const { accountID } = req.params

      const result = await getAccountByIDModel(accountID)
      if (result.length) {
        res.status(200).send({
          success: true,
          message: `Account with id ${accountID}`,
          data: result[0]
        })
      } else {
        res.status(404).send({
          success: false,
          message: `Account data with id ${accountID} Not Found!`
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

  createAccount: async (req, res) => {
    try {
      const catchData = await getEmailAccountModel(req.body.account_email)
      if (!catchData.length) {
        const result = await createAccountModel(req.body)
        if (result.affectedRows) {
          res.status(200).send({
            success: true,
            message: 'Account Registered succesfully'
          })
        } else {
          res.status(400).send({
            success: false,
            message: 'Register Account Failed!'
          })
        } 
      } else {
        res.status(409).send({
          success: false,
          message: 'Account has registered!'
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

  updateAccount: async (req, res) => {
    try {
      const { accountID } = req.params
      const caughtData = await getAccountByIDModel(accountID)

      if (caughtData.length) {
        const result = await updateAccountModel(accountID, req.body)
          if (result.affectedRows) {
            res.status(200).send({
              success: true,
              message: `Account with id ${accountID} updated succesfully`
            })
          } else {
            res.status(400).send({
              success: false,
              message: 'Failed to update account'
            })
          }
        } else {
          res.status(404).send({
            success: false,
            message: `Account data with id ${accountID} Not Found!`
          })
        }      
      } catch (error) {
        res.status(500).send({
          success: false,
          message: 'Internal Server Error, Please try again later'
        })
      } 
    },

    updatePassword: async (req, res) => {
      try {
        const { accountID } = req.params
        const caughtData = await getAccountByIDModel(accountID)
  
        if (caughtData.length) {
          const result = await updateAccountModel(accountID, req.body)
            if (result.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Account with id ${accountID} updated succesfully`
              })
            } else {
              res.status(400).send({
                success: false,
                message: 'Failed to update account'
              })
            }
          } else {
            res.status(404).send({
              success: false,
              message: `Account data with id ${accountID} Not Found!`
            })
          }      
        } catch (error) {
          res.status(500).send({
            success: false,
            message: 'Internal Server Error, Please try again later'
          })
        } 
      },

    loginAccount: async (req, res, _next) => {
      try {
        const { email, password } = req.body
        const findData = await getEmailAccountModel(email)
  
        if (findData.length) {
          const match = await bcrypt.compare(password, findData[0].password)
          if (match) {
            const { accountID, account_name, account_email, privilege } = findData [0]
            let payload = {
              accountID,
              account_name,
              account_email,
              privilege
            }
  
            const token = JWT.sign(payload, process.env.JWT_KEY, { expiresIn: '12h' })
            payload = { ...payload, token }
            res.send({
              success: true,
              message: 'Success Login!',
              data: payload
            })

          } else {
            res.status(405).send({
              success: false,
              message: 'Wrong Password!'
            })
          }
        } else {
          res.status(404).send({
            success: false,
            message: 'Email/Account not registered!'
          })
        }
      } catch (error) {
        res.status(500).send({
          success: false,
          message: 'Bad request'
        })
      }
    }
}
