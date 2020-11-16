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

  createCompanyModel: (name, email, password, noHp, companyName, companyPosition, status, createdAt, updatedAt) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO company (name, email, password, noHp, companyName, companyPosition, status, createdAt, updatedAt) VALUES 
            ('${name}', '${email}', '${password}', '${noHp}', '${companyName}', '${companyPosition}', '${status}', '${createdAt}', '${updatedAt}')`
      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteCompanyModel: (companyID) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM company WHERE companyID = ${companyID}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  putCompanyModel: (companyID, name, email, password, noHp, companyName, companyPosition, status, updatedAt) => {
    return new Promise((resolve, reject) => {
      const queryUpdate = `UPDATE company SET name = '${name}', email = '${email}', password = '${password}', noHp = '${noHp}', companyName = '${companyName}', companyPosition = '${companyPosition}', status = '${status}', updatedAt = '${updatedAt}' WHERE companyID = ${companyID}`
      db.query(queryUpdate, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  patchCompanyModel: (dataColumn, companyID) => {
    return new Promise((resolve, reject) => {
      const queryUpdate = `UPDATE company SET ${dataColumn} WHERE companyID = ${companyID}`
      db.query(queryUpdate, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
