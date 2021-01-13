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
        h.offering_owner,
        ac2.account_name,
        t.talent_tittle,
        t.talent_image,
        p.projectID, 
        p.project_tittle, 
        p.project_duration, 
        p.project_desc, 
        p.project_sallary,
        p.project_image,
        p.project_owner
        FROM hiring as h
        INNER JOIN companyproject as p
        on h.projectID = p.projectID
        INNER JOIN company as c
        on p.project_owner = c.companyID
        INNER JOIN account as ac
        on c.accountID = ac.accountID
        INNER JOIN talent as t
        on h.offering_owner = t.talentID
        INNER JOIN account ac2
        on t.accountID = ac2.accountID
        WHERE p.projectID = ${project_owner} AND ${searchKey} LIKE '%${searchValue}%' ORDER BY h.offeringID DESC LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
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

    getProjectHighlightModel: (participator_owner) => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT
        cc.contributorID,
        cc.participator_owner,
        c.companyID,
        c.company_name,
        c.company_image,
        p.project_tittle,
        p.project_desc,
        p.project_duration,
        p.project_sallary,
        p.project_image,
        h.offeringID,
        h.hiring_status,
        h.reply_message
        FROM companycontributor as cc
        INNER JOIN hiring as h
        on cc.participator_owner = h.offeringID
        INNER JOIN companyproject as p
        on h.projectID = p.projectID
        INNER JOIN company as c
        on p.project_owner = c.companyID
        INNER JOIN talent as t
        on h.offering_owner = t.talentID
        INNER JOIN account as ac
        on t.accountID = ac.accountID
        WHERE ac.accountID = ${participator_owner} ORDER BY h.offeringID DESC LIMIT 5`, (err, result, fields) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      })
    }
}