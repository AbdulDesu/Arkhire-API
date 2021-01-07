const db = require('../helpers/db')

module.exports = {
    getExperienceModel:  (searchKey, searchValue, limit, offset, callback) => {
        db.query(`SELECT * FROM talentexperience WHERE ${searchKey} LIKE '%${searchValue}%' ORDER BY experience_end DESC LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
          if (!err) {
            callback(result)
          } else {
            callback(err)
          }
        })
    },

    getExperienceByOwnerIDModel: (experience_owner) => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM talentexperience WHERE experience_owner = ${experience_owner}`, (err, result, fields) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      })
  },

      getExperienceByIDModel: (experienceID) => {
        return new Promise((resolve, reject) => {
          db.query(`SELECT * FROM talentexperience WHERE experienceID = ${experienceID}`, (err, result, fields) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
    },

    createExperienceModel: (inputData) => {
        return new Promise((resolve, reject) => {
          const experienceData = {
            experience_owner : inputData.experience_owner,
            experience_title : inputData.experience_title,
            experience_source : inputData.experience_source,
            experience_start : inputData.experience_start,
            experience_end : inputData.experience_end,
            experience_desc : inputData.experience_desc,
            updatedAt : inputData.updatedAt
          }
          const query = `INSERT INTO talentexperience SET ?`
          db.query(query, experienceData, async (err, result, fields) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
    },

    updateExperienceModel: (experienceID, data) => {
        return new Promise((resolve, reject) => {
          const query = `
            UPDATE talentexperience
               SET ?
             WHERE experienceID = ${experienceID}
          `
          db.query(query, data, (error, result, _fields) => {
            if (!error) {
              resolve(result)
            } else {
              reject(error)
            }
          })
        })
    },

    deleteExperienceModel: (experienceID) => {
        return new Promise((resolve, reject) => {
          const query = `DELETE FROM talentexperience WHERE ?`
          db.query(query,{ experienceID: experienceID }, async (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
    }
}