const db = require('../helpers/db')
const { createTalentSkillModel } = require('../models/talentSkill')

module.exports = {
  
  getTalentByIDModel: (talentID) => {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT 
      talent.talentID, 
      account.accountID, 
      account.account_name, 
      talent.talent_tittle, 
      talent.talent_time, 
      talent.talent_city,
      talent.talent_profile,
      talent.talent_image,
      account.createdAt,
      talent.updatedAt
      FROM talent 
      JOIN account 
      ON account.accountID = talent.accountID
      WHERE ?
      `

      db.query(query, { talentID: talentID }, (err, result, _fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  filterTalentByNameModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT 
    talent.talentID, 
    account.accountID, 
    account.account_name, 
    talent.talent_tittle, 
    talent.talent_time, 
    talent.talent_city,
    talent.talent_profile,
    talent.talent_image,
    account.createdAt,
    talent.updatedAt
    FROM talent 
    JOIN account 
    ON account.accountID = talent.accountID
    WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },

  filterTalentByLocationModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT 
    talent.talentID, 
    account.accountID, 
    account.account_name, 
    talent.talent_tittle, 
    talent.talent_time, 
    talent.talent_city,
    talent.talent_profile,
    talent.talent_image,
    account.createdAt,
    talent.updatedAt
    FROM talent 
    JOIN account 
    ON account.accountID = talent.accountID WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },

  filterTalentByTitleModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT 
    talent.talentID, 
    account.accountID, 
    account.account_name, 
    talent.talent_tittle, 
    talent.talent_time, 
    talent.talent_city,
    talent.talent_profile,
    talent.talent_image,
    account.createdAt,
    talent.updatedAt
    FROM talent 
    JOIN account 
    ON account.accountID = talent.accountID WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },

  filterTalentByWorkTimeModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT 
    talent.talentID, 
    account.accountID, 
    account.account_name, 
    talent.talent_tittle, 
    talent.talent_time, 
    talent.talent_city,
    talent.talent_profile,
    talent.talent_image,
    account.createdAt,
    talent.updatedAt
    FROM talent 
    JOIN account 
    ON account.accountID = talent.accountID WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },


  updateTalentModel: (talentID, data) => {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE talent
           SET ?
         WHERE talentID = ${talentID}
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

  createTalentModel: (accountID) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO talent SET ?`
      db.query(query, {accountID: accountID}, async (err, result, fields) => {
        if (!err) {
          await createTalentSkillModel(result.insertId)
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
