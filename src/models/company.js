const db = require('../helpers/db')

module.exports = {
  getAllCompanyModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT * FROM company WHERE ${searchKey} LIKE '%${searchValue}%' ORDER BY RAND() LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },

  getCompanyByAccountIDModel: (accountID) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT 
        c.companyID, 
        ac.accountID, 
        ac.account_name,
        c.company_name,
        c.company_position,
        c.company_location,
        c.company_latitude,
        c.company_longitude,
        c.company_type,
        c.company_detail,
        c.company_linkedin,
        c.company_instagram,
        c.company_facebook,
        c.company_image,
        c.updatedAt
        FROM company as c
        INNER JOIN account as ac
        ON ac.accountID = c.accountID
        WHERE c.accountID = ${accountID}`, (err, result, fields) => {
        if (!err) {
            resolve(result)
        } else {
            reject(new Error(err))
        }
        })
    })
  },

  getCompanyByIDModel: (companyID) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM company WHERE companyID = ${companyID}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  createCompanyModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO company SET ?`
      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateCompanyModel: (companyID, inputData) => {
    return new Promise((resolve, reject) => {
      const queryUpdate = `UPDATE company SET ? WHERE companyID = ${companyID}`
      db.query(queryUpdate, inputData, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
