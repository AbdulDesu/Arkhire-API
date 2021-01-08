const db = require('../helpers/db')

module.exports = {

    getContributorModel: (contributor_owner) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT
            cc.contributorID,
            cc.contributor_owner,
            cc.participator_name,
            ac.account_name,
            t.talent_tittle,
            t.talent_image
            FROM companycontributor as cc
            INNER JOIN account as ac
            on cc.participator_name = ac.accountID
            INNER JOIN talent as t
            on cc.participator_name = t.accountID
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
            cc.participator_name,
            ac.account_name,
            t.talent_tittle,
            t.talent_image
            FROM companycontributor as cc
            INNER JOIN account as ac
            on cc.participator_name = ac.accountID
            INNER JOIN talent as t
            on cc.participator_name = t.accountID
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
      }

}