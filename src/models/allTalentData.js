const db = require('../helpers/db')

module.exports = {
    getAllTalentDataModel: (searchKey, searchValue, limit, offset, callback) => {
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
        WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
          if (!err) {
            callback(result)
          } else {
            callback(err)
          }
        })
      },
}