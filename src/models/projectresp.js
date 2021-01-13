const db = require('../helpers/db')

module.exports = {

   getAllProjectResponseModel: (searchKey, searchValue, limit, offset, callback) => {
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
    WHERE ${searchKey} LIKE '%${searchValue}%' ORDER BY h.offeringID DESC LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
      })
    },

    getProjectResponseByOwnerIDModel: (project_owner, searchKey, searchValue, limit, offset, callback) => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT
        h.offeringID,
        h.hiring_status, 
        h.reply_message, 
        p.projectID, 
        p.project_tittle, 
        p.project_duration, 
        p.project_desc, 
        p.project_sallary,
        p.project_owner
        FROM hiring as h
        INNER JOIN companyproject as p
        on h.projectID = p.projectID
        INNER JOIN company as c
        on p.project_owner = c.companyID
        WHERE accountID = ${project_owner} AND ${searchKey} LIKE '%${searchValue}%' ORDER BY h.offeringID DESC LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
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