const db = require('../helpers/db')

module.exports = {
    companyOfferingModel: (projectID) => {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO hiring SET ?`
            db.query(query, {projectID: projectID}, async (err, res, _fields) => {
                if (!err) {
                    resolve(res)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    deleteOfferingModel: (projectID) => {
        return new Promise((resolve, reject) => {
          const query = `DELETE FROM hiring WHERE ?`
          db.query(query, {projectID: projectID}, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
    },

    getAllOfferingModel: (searchKey, searchValue, limit, offset, callback) => {
      db.query(`SELECT * FROM hiring WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
        if (!err) {
          callback(result)
        } else {
          callback(err)
        }
      })
    },

    getOfferingByIDModel: (offeringID) => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM hiring WHERE offeringID = ${offeringID}`, (err, result, fields) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      })
    },

    updateOfferByIDModel: (offeringID, data) => {
      return new Promise((resolve, reject) => {
        const query = `
          UPDATE hiring
             SET ?
           WHERE offeringID = ${offeringID}
        `
        db.query(query, data, (error, result, _fields) => {
          if (!error) {
            resolve(result)
          } else {
            reject(error)
          }
        })
      })
    }
}