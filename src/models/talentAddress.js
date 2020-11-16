const db = require('../helpers/db')
const talent = require('./talent')

module.exports = {
  getAllTalentAddressModel: (searchKey, searchValue, limit, offset, callback) => {
    db.query(`SELECT * FROM addresstalent WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      if (!err) {
        callback(result)
      } else {
        callback(err)
      }
    })
  },

  getTalentAddressByTalentIDModel: (talentID) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM addresstalent WHERE talentID = ${talentID}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  createTalentAddressModel: (talentName, talentAddress, updatedAt) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO addresstalent (talentName, talentAddress, updatedAt) VALUES 
        ('${talentName}', '${talentAddress}', '${updatedAt}')`
      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteTalentAddressModel: (talentID) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM addressTalent WHERE talentID = ${talentID}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  putTalentAddressModel: (talentID, talentName, talentAddress, updatedAt) => {
    return new Promise((resolve, reject) => {
      const queryUpdate = `UPDATE addresstalent SET talentName = '${talentName}', talentAddress = '${talentAddress}', updatedAt = '${updatedAt}' WHERE talentID = ${talentID}`
      db.query(queryUpdate, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  patchTalent: async (req, res) => {
    try {
      const { talentID } = req.params
      const {
        name = '',
        email = '',
        noHp = '',
        password = '',
        status = '',
        updatedAt = ''
      } = req.body

      if (name.trim() || email.trim() || noHp.trim() || password.trim() || status.trim() || updatedAt.trim()) {
        const resSelect = await getTalentByIDModel(talentID)
        if (resSelect.length) {
          const dataColumn = Object.entries(req.body).map(item => {
            const queryDynamic = parseInt(item[1]) > 0 ? `${item[0] = item[1]}` : `${item[0]}='${item[1]}'`
            return queryDynamic
          })

          const resUpdate = await patchTalentModel(dataColumn, talentID)
          if (resUpdate.affectedRows) {
            res.status(200).send({
              success: true,
              message: `Talent with id ${talentID} updated succesfully`
            })
          } else {
            res.status(400).send({
              success: false,
              message: 'Talent data failed to update'
            })
          }
        } else {
          res.status(404).send({
            success: false,
            message: `Talent with id ${talentID} not found`
          })
        }
      } else {
        res.status(400).send({
          success: false,
          message: 'Please, Fill all field!'
        })
      }
    } catch (error) {
      console.log(error)
      req.status(500).send({
        success: false,
        message: 'Internal server error, Please try again later!'
      })
    }
  },

  patchTalentAddressModel: (dataColumn, talentID) => {
    return new Promise((resolve, reject) => {
      const queryUpdate = `UPDATE addresstaleny SET ${dataColumn} WHERE talentID = ${talentID}`
      db.query(queryUpdate, (err, result, _fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
