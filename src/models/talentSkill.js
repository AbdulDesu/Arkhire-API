const db = require('../helpers/db')
const { createAchivementModel } = require('../models/achivement')

module.exports = {
  getAllTalentSkillModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT * FROM talentskill WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },

  getAllTalentSkillByTalentIDModel: (talentID) => {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT * FROM talentskill WHERE ?`
     db.query(query, { talentID: talentID }, (err, res, _fields) => {
       if(!err){
         resolve(res)
       } else {
         reject(err)
       }
        })
      }) 
  },

  createTalentSkillModel: (talentID) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO talentskill SET ?`
      db.query(query, {talentID: talentID}, async (err, result, fields) => {
        if (!err) {
          await createAchivementModel(result.insertId)
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateTalentSkillModel: (talentID, inputData) => {
    return new Promise((resolve, reject) => {
      const queryUpdate = `UPDATE talentskill set ? WHERE talentID = ${talentID}`
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
