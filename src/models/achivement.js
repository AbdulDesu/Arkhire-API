const db = require('../helpers/db')

module.exports = {

  getAllTalentAchivementModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT * FROM achivement WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },

    getTalentAchivementByTalentIDModel: (talentID) => {
        return new Promise((resolve, reject) => {
          const query = `
            SELECT * FROM achivement WHERE ? `
          db.query(query, {talentID: talentID }, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },

    createAchivementModel: (talentID) => {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO achivement SET ?`
            db.query(query, {talentID: talentID}, async (err, res, _fields) => {
                if (!err) {
                    resolve(res)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    updateTalentAchivementModel: (talentID, inputData) => {
        return new Promise((resolve, reject) => {
          const query = `UPDATE achivement SET ? WHERE talentID = ${talentID}`
    
          db.query(query, inputData, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },
}