const db = require('../helpers/db')

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
  getTalentSkillByTalentIDModel: (talentID) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM talentskill WHERE talentID = ${talentID}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  createTalentSkillModel: (talentName, talentEmail, skill_1, skill_2, skill_3, skill_4, skill_5, updatedAt) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO talentskill (talentName, talentEmail, skill_1, skill_2, skill_3, skill_4, skill_5, updatedAt) VALUES 
            ('${talentName}', '${talentEmail}', '${skill_1}', '${skill_2}', '${skill_3}', '${skill_4}', '${skill_5}', '${updatedAt}')`
      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteTalentSkillModel: (talentID) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM talentskill WHERE talentID = ${talentID}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  putTalentSkillModel: (talentID, talentName, talentEmail, skill_1, skill_2, skill_3, skill_4, skill_5, updatedAt) => {
    return new Promise((resolve, reject) => {
      const queryUpdate = `UPDATE talentskill SET talentName = '${talentName}', talentEmail = '${talentEmail}', skill_1 = '${skill_1}', skill_2 = '${skill_2}', skill_3 = '${skill_3}', skill_4 = '${skill_4}', skill_5 = '${skill_5}', updatedAt = '${updatedAt}' WHERE talentID = ${talentID}`
      db.query(queryUpdate, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  patchTalentSkillModel: (dataColumn, talentID) => {
    return new Promise((resolve, reject) => {
      const queryUpdate = `UPDATE talentSkill SET ${dataColumn} WHERE talentID = ${talentID}`
      db.query(queryUpdate, (err, result, _fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
