const db = require('../helpers/db')

module.exports = {
  getAllCompanyModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT * FROM company WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
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
