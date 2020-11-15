const db = require('../helpers/db')

module.exports = {
    getFullTalentDataModel: (talentID) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT talent.talentID, talent.name, addresstalent.talentAddress, talent.status, talentskill.skill_1, talentskill.skill_2, talentskill.skill_3, talentskill.skill_4, talentskill.skill_5, talentskill.updatedAt
            FROM talent 
            INNER JOIN addresstalent
            ON talent.talentID = addresstalent.talentID 
            INNER JOIN talentskill
            on talent.talentID = talentskill.talentID`, (err, result, fields) => {
              if (!err) {
                resolve(result)
              } else {
                reject(new Error(err))
              }
            })
          })
        },

}