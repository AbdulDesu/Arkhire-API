const db = require('../helpers/db')

module.exports = {
    checkProjectResponseModel: (searchKey, searchValue, limit, offset, callback) => {
        db.query(`SELECT
        h.offeringID, 
        p.projectID, 
        p.project_tittle, 
        p.project_duration, 
        p.project_desc, 
        p.project_sallary, 
        h.hiring_status, 
        h.reply_message, 
        h.repliedAt 
        FROM hiring as h
        INNER JOIN companyproject as p
        on h.projectID = p.projectID
        WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
          if (!err) {
            callback(result)
          } else {
            callback(err)
          }
        })
      },

      checkNewerProjectResponseModel: (searchKey, searchValue, limit, offset, callback) => {
        db.query(`SELECT
        h.offeringID, 
        p.projectID, 
        p.project_tittle, 
        p.project_duration, 
        p.project_desc, 
        p.project_sallary, 
        h.hiring_status, 
        h.reply_message, 
        h.repliedAt 
        FROM hiring as h
        INNER JOIN companyproject as p
        on h.projectID = p.projectID
        WHERE ${searchKey} LIKE '%${searchValue}%' ORDER BY h.offeringID DESC LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
          if (!err) {
            callback(result)
          } else {
            callback(err)
          }
        })
      },
}