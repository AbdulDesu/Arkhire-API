const db = require('../helpers/db')

module.exports = {

   getAllProjectResponseModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT
    p.projectID, 
    p.project_tittle, 
    p.project_desc, 
    p.project_sallary,
    p.project_owner,
    c.company_name,
    c.company_image,
    p.postedAt
    FROM companyproject as p
    INNER JOIN company as c
    on p.project_owner = c.accountID
    WHERE ${searchKey} LIKE '%${searchValue}%' ORDER BY p.projectID DESC LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
    },

    getProjectResponseByOwnerIDModel: (project_owner) => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT
        h.offeringID, 
        p.projectID, 
        p.project_tittle, 
        p.project_duration, 
        p.project_desc, 
        p.project_sallary,
        p.project_owner,
        c.accountID,
        c.company_name,
        c.company_image,
        p.project_target, 
        h.hiring_status, 
        h.reply_message
        FROM hiring as h
        INNER JOIN companyproject as p
        on h.projectID = p.projectID
        INNER JOIN company as c
        on p.project_owner = c.accountID
        WHERE project_owner = ${project_owner} ORDER BY h.offeringID DESC`, (err, result, fields) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      })
    },

    getProjectResponseByTargetAccountIDModel: (project_target, searchKey, searchValue, limit, offset, callback) => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT
        h.offeringID, 
        p.projectID, 
        p.project_tittle, 
        p.project_duration, 
        p.project_desc, 
        p.project_sallary,
        p.project_owner,
        c.company_name,
        c.company_image,
        p.project_target, 
        h.hiring_status, 
        h.reply_message
        FROM hiring as h
        INNER JOIN companyproject as p
        on h.projectID = p.projectID
        INNER JOIN company as c
        on p.project_owner = c.companyID
        WHERE project_target = ${project_target} AND ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      })
    },

    getProjectHighlightModel: (project_target) => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT
        h.offeringID, 
        p.projectID, 
        p.project_tittle, 
        p.project_duration, 
        p.project_desc, 
        p.project_sallary,
        p.project_owner,
        c.company_name,
        c.company_image,
        p.project_target, 
        h.hiring_status, 
        h.reply_message
        FROM hiring as h
        INNER JOIN companyproject as p
        on h.projectID = p.projectID
        INNER JOIN company as c
        on p.project_owner = c.companyID
        WHERE project_target = ${project_target} ORDER BY h.offeringID DESC LIMIT 5`, (err, result, fields) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      })
    }
}