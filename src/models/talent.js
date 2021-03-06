const db = require('../helpers/db')
const { createTalentSkillModel } = require('../models/talentSkill')

module.exports = {
  
  getTalentByIDModel: (talentID) => {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT 
      t.talentID, 
      ac.accountID, 
      ac.account_name,
      ac.account_email,
      ac.account_phone, 
      t.talent_tittle, 
      t.talent_time, 
      t.talent_city,
      t.talent_profile,
      t.talent_image,
      av.talent_github,
      av.talent_cv,
      ts.skill_1,
      ts.skill_2,
      ts.skill_3,
      ts.skill_4,
      ts.skill_5
      FROM talent as t
      INNER JOIN account as ac
      ON ac.accountID = t.accountID
      INNER JOIN achivement as av
      ON t.talentID = av.talentID
      INNER JOIN talentskill as ts
      ON t.talentID = ts.talentID
      WHERE t.talentID = ${talentID}
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

  getTalentByAccountIDModel: (accountID) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT 
        t.talentID, 
        ac.accountID, 
        ac.account_name,
        ac.account_email,
        ac.account_phone, 
        t.talent_tittle, 
        t.talent_time, 
        t.talent_city,
        t.talent_profile,
        t.talent_image,
        av.talent_github,
        av.talent_cv,
        ts.skill_1,
        ts.skill_2,
        ts.skill_3,
        ts.skill_4,
        ts.skill_5
        FROM talent as t
        INNER JOIN account as ac
        ON ac.accountID = t.accountID
        INNER JOIN achivement as av
        ON t.talentID = av.talentID
        INNER JOIN talentskill as ts
        ON t.talentID = ts.talentID
        WHERE t.accountID = ${accountID}`, (err, result, fields) => {
        if (!err) {
            resolve(result)
        } else {
            reject(new Error(err))
        }
        })
    })
  },

  getReadyToHireTalentModel: (limit, offset, callback) => {
    db.query(`SELECT 
    t.talentID, 
    ac.accountID, 
    ac.account_name,
    ac.account_email,
    ac.account_phone, 
    t.talent_tittle, 
    t.talent_time, 
    t.talent_city,
    t.talent_profile,
    t.talent_image,
    av.talent_github,
    av.talent_cv,
    ts.skill_1,
    ts.skill_2,
    ts.skill_3,
    ts.skill_4,
    ts.skill_5
    FROM talent as t
    INNER JOIN account as ac
    ON ac.accountID = t.accountID
    INNER JOIN achivement as av
    ON t.talentID = av.talentID
    INNER JOIN talentskill as ts
    ON t.talentID = ts.talentID
    WHERE talent_tittle = 'Android Developer' OR talent_tittle = 'Devops Engineer' OR talent_tittle = 'Fullstack Mobile' OR talent_tittle = 'Fullstack Web' ORDER BY RAND() LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
},

  filterTalentByNameModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT 
    t.talentID, 
    ac.accountID, 
    ac.account_name,
    ac.account_email,
    ac.account_phone, 
    t.talent_tittle, 
    t.talent_time, 
    t.talent_city,
    t.talent_profile,
    t.talent_image,
    av.talent_github,
    av.talent_cv,
    ts.skill_1,
    ts.skill_2,
    ts.skill_3,
    ts.skill_4,
    ts.skill_5
    FROM talent as t
    INNER JOIN account as ac
    ON ac.accountID = t.accountID
    INNER JOIN achivement as av
    ON t.talentID = av.talentID
    INNER JOIN talentskill as ts
    ON t.talentID = ts.talentID
    WHERE ${searchKey} LIKE '%${searchValue}%'  ORDER BY RAND() LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },

  filterTalentByLocationModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT 
    t.talentID, 
    ac.accountID, 
    ac.account_name,
    ac.account_email,
    ac.account_phone, 
    t.talent_tittle, 
    t.talent_time, 
    t.talent_city,
    t.talent_profile,
    t.talent_image,
    av.talent_github,
    av.talent_cv,
    ts.skill_1,
    ts.skill_2,
    ts.skill_3,
    ts.skill_4,
    ts.skill_5
    FROM talent as t
    INNER JOIN account as ac
    ON ac.accountID = t.accountID
    INNER JOIN achivement as av
    ON t.talentID = av.talentID
    INNER JOIN talentskill as ts
    ON t.talentID = ts.talentID
    WHERE  ${searchKey} LIKE '%${searchValue}%' ORDER BY RAND() DESC LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },

  filterTalentByTitleModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT 
    t.talentID, 
    ac.accountID, 
    ac.account_name,
    ac.account_email,
    ac.account_phone, 
    t.talent_tittle, 
    t.talent_time, 
    t.talent_city,
    t.talent_profile,
    t.talent_image,
    av.talent_github,
    av.talent_cv,
    ts.skill_1,
    ts.skill_2,
    ts.skill_3,
    ts.skill_4,
    ts.skill_5
    FROM talent as t
    INNER JOIN account as ac
    ON ac.accountID = t.accountID
    INNER JOIN achivement as av
    ON t.talentID = av.talentID
    INNER JOIN talentskill as ts
    ON t.talentID = ts.talentID
    WHERE ${searchKey} LIKE '%${searchValue}%' ORDER BY talentID DESC LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },

  filterTalentByWorkTimeModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT 
    t.talentID, 
    ac.accountID, 
    ac.account_name,
    ac.account_email,
    ac.account_phone, 
    t.talent_tittle, 
    t.talent_time, 
    t.talent_city,
    t.talent_profile,
    t.talent_image,
    av.talent_github,
    av.talent_cv,
    ts.skill_1,
    ts.skill_2,
    ts.skill_3,
    ts.skill_4,
    ts.skill_5
    FROM talent as t
    INNER JOIN account as ac
    ON ac.accountID = t.accountID
    INNER JOIN achivement as av
    ON t.talentID = av.talentID
    INNER JOIN talentskill as ts
    ON t.talentID = ts.talentID
    WHERE  ${searchKey} LIKE '%${searchValue}%' ORDER BY RAND() LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
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
