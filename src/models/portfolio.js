const db = require('../helpers/db')

module.exports = {
    getAllPortfolioModel:  (searchKey, searchValue, limit, offset, callback) => {
        db.query(`SELECT * FROM talentportfolio WHERE ${searchKey} LIKE '%${searchValue}%' ORDER BY updatedAt DESC LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
          if (!err) {
            callback(result)
          } else {
            callback(err)
          }
        })
    },

    getPortfolioByIDModel: (portfolioID) => {
      return new Promise((resolve, reject) => {
        const query = `
          SELECT * FROM talentportfolio WHERE ? `
        db.query(query, {portfolioID: portfolioID }, (error, results, _fields) => {
          if (!error) {
            resolve(results)
          } else {
            reject(error)
          }
        })
      })
    },

    getPortfolioByOwnerIDModel: (portfolio_owner) => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM talentportfolio WHERE portfolio_owner = ${portfolio_owner}`, (err, result, fields) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      })
  },

  createPortfolioModel: (inputData) => {
    return new Promise((resolve, reject) => {
      const portfolioData = {
        portfolio_owner: inputData.portfolio_owner,
        portfolio_title : inputData.portfolio_title,
        portfolio_desc : inputData.portfolio_desc,
        portfolio_repository : inputData.portfolio_repository,
        portfolio_image: inputData.portfolio_image
      }
      const query = `INSERT INTO talentportfolio SET ?`
      db.query(query, portfolioData, async (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updatePortfolioModel: (portfolioID, inputData) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE talentportfolio SET ? WHERE portfolioID = ${portfolioID}`

      db.query(query, inputData, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  deletePortfolioModel: (portfolioID) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM talentportfolio WHERE ?`
      db.query(query, {portfolioID: portfolioID}, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  }
}