const db = require('../helpers/db')

module.exports = {

    getContributorModel: (participator_owner) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT
            cc.contributorID,
            cc.participator_owner,
            t.talentID,
            ac.account_name,
            t.talent_tittle,
            t.talent_image
            FROM companycontributor as cc
            INNER JOIN hiring as h
            on cc.participator_owner = h.offeringID
            INNER JOIN talent as t
            on h.offering_owner = t.talentID
            INNER JOIN account as ac
            on t.accountID = ac.accountID
            WHERE projectID = ${participator_owner}`, (err, result, fields) => {
            if (!err) {
                resolve(result)
            } else {
                reject(new Error(err))
            }
            })
        })
    },

    getContributorByIDModel: (contributorID) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT
            cc.contributorID,
            cc.contributor_owner,
            cc.participator_owner,
            ac.account_name
            FROM companycontributor as cc
            INNER JOIN account as ac
            on cc.participator_owner = ac.accountID
            INNER JOIN companyproject as p
            on cc.contributor_owner = p.projectID
            INNER JOIN company as c
            on p.project_owner = c.companyID
            WHERE contributorID = ${contributorID} ORDER BY ac.account_name ASC`, (err, result, fields) => {
            if (!err) {
                resolve(result)
            } else {
                reject(new Error(err))
            }
            })
        })
    },

    deleteContributorModel: (contributorID) => {
        return new Promise((resolve, reject) => {
          const query = `DELETE FROM companycontributor WHERE ?`
          db.query(query, {contributorID: contributorID}, (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },

    getContributorByParticipatorID: (participator_owner, searchKey, searchValue, limit, offset, callback) => {
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
          WHERE ac.accountID = ${participator_owner} AND ${searchKey} LIKE '%${searchValue}%' ORDER BY h.offeringID DESC LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
          if (!err) {
              resolve(result)
          } else {
              reject(new Error(err))
          }
          })
      })
  },

  createContributorModel : (participator_owner) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO companycontributor SET ?`
      db.query(query, {participator_owner : participator_owner}, async (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}