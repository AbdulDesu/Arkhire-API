const db = require('../helpers/db')

module.exports = {

    getContributorModel: (contributor_owner) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT
            cc.contributorID,
            cc.contributor_owner,
            cc.participator_owner,
            ac.account_name,
            t.talentID,
            t.talent_tittle,
            t.talent_image
            FROM companycontributor as cc
            INNER JOIN account as ac
            on cc.participator_owner = ac.accountID
            INNER JOIN talent as t
            on cc.participator_owner = t.accountID
            WHERE contributor_owner = ${contributor_owner} ORDER BY ac.account_name ASC`, (err, result, fields) => {
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

    getContributorByParticipatorID: (participator_owner) => {
      return new Promise((resolve, reject) => {
          db.query(`SELECT
          cc.contributorID,
          cc.contributor_owner,
          cc.participator_owner,
          c.companyID,
          c.company_name,
          c.company_image,
          p.project_tittle,
          p.project_desc,
          p.project_duration,
          p.project_sallary,
          h.offeringID,
          h.hiring_status,
          h.reply_message
          FROM companycontributor as cc
          INNER JOIN talent as t
          on cc.participator_owner = t.talentID
          INNER JOIN companyproject as p
          on cc.contributor_owner = p.projectID
          INNER JOIN company as c
          on p.project_owner = c.companyID
          INNER JOIN account as ac
          on t.accountID = ac.accountID
          INNER JOIN hiring as h
          on h.projectID = p.projectID
          WHERE ac.accountID = ${participator_owner}`, (err, result, fields) => {
          if (!err) {
              resolve(result)
          } else {
              reject(new Error(err))
          }
          })
      })
  },

  createContributorModel : (inputData) => {
    return new Promise((resolve, reject) => {
      const projectData = {
        contributor_owner : inputData.contributor_owner,
        participator_owner : inputData.participator_owner
      }
      const query = `INSERT INTO companycontributor SET ?`
      db.query(query, projectData, async (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}