const db = require('../helpers/db')

module.exports = {
    getAllTalentModel:(searchKey, searchValue, limit, offset, callback) => {
      db.query(`SELECT * FROM talent WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
        if (!err) {
          callback(result)
        } else {
          callback(err)
        }
      })
    },
    getTalentByIDModel: (talentID) => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM talent WHERE talentID = ${talentID}`, (err, result, _fields) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      })
    },
    createTalentModel: (name, email, noHp, password, status, createdAt, updatedAt) => {
      return new Promise((resolve, reject) => {
        const query = `INSERT INTO talent (name, email, noHp, password, status, createdAt, updatedAt) VALUES 
          ('${name}', '${email}', '${noHp}', '${password}', '${status}', '${createdAt}', '${updatedAt}')`
        db.query(query, (err, result, _fields) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      })
    }
  }
  