require('dotenv').config()
const bycrpyt = require('bcrypt')
const db = require('../helpers/db')


const { createTalentModel } = require('../models/talent')
const { createCompanyModel } = require('../models/company')

module.exports = {
  getAllAccountModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT * FROM account WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },
  
  getAccountByIDModel: (accountID) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM account WHERE accountID = ${accountID}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  createAccountModel: (data) => {
    const salt = bycrpyt.genSaltSync(10)
    const encyrptPassword = bycrpyt.hashSync(data.password, salt)
    return new Promise((resolve, reject) => {
      const dataAccount = {
        account_name: data.account_name,
        account_email: data.account_email,
        account_phone: data.account_phone,
        password: encyrptPassword,
        privilege: data.privilege,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt
      }
      const query = `INSERT INTO account SET ?`
      db.query(query, dataAccount, async (err, result, fields) => {
        if (!err) {
          if(parseInt(data.privilege) === 0){
            await createTalentModel(result.insertId)
          }else{
            await createCompanyModel({
              accountID: result.insertId,
              company_name: data.company_name,
              company_position: data.company_position
            })
          }
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateAccountModel: (accountID, inputData) => {
    return new Promise((resolve, reject) => {
      const queryUpdate = `UPDATE account SET ? WHERE accountID = ${accountID}`
      db.query(queryUpdate, inputData, (err, result, _fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getEmailAccountModel: (account_email)=> {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM account WHERE ?`

      db.query(query, { account_email: account_email }, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  }
}
