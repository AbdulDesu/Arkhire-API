const db = require('../helpers/db')
const { companyOfferingModel, deleteOfferingModel } = require('../models/hireprogress')

module.exports = {
    getAllProjectModel:  (searchKey, searchValue, limit, offset, callback) => {
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
        on p.project_owner = c.companyID
        WHERE ${searchKey} LIKE '%${searchValue}%' ORDER BY p.projectID DESC LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
          if (!err) {
            callback(result)
          } else {
            callback(err)
          }
        })
      },

    getProjectByIDModel: (projectID) => {
        return new Promise((resolve, reject) => {
          db.query(`SELECT * FROM companyproject WHERE projectID = ${projectID}`, (err, result, fields) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
      
    createProjectModel: (inputData) => {
        return new Promise((resolve, reject) => {
          const projectData = {
            project_tittle: inputData.project_tittle,
            project_duration: inputData.project_duration,
            project_desc: inputData.project_desc,
            project_sallary: inputData.project_sallary,
            project_owner: inputData.project_owner
          }
          const query = `INSERT INTO companyproject SET ?`
          db.query(query, projectData, async (err, result, fields) => {
            if (!err) {
                await companyOfferingModel(result.insertId)
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },

      deleteProjectByIDModel: (projectID) => {
        return new Promise((resolve, reject) => {
          const query = `DELETE FROM companyproject WHERE ?`
          db.query(query,{ projectID: projectID }, async (error, results, _fields) => {
            if (!error) {
                await deleteOfferingModel(projectID)
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },

      createNewProjectModel: (inputData) => {
        return new Promise((resolve, reject) => {
          const projectData = {
            project_tittle: inputData.project_tittle,
            project_duration: inputData.project_duration,
            project_desc: inputData.project_desc,
            project_sallary: inputData.project_sallary,
            project_owner: inputData.project_owner
          }
          const query = `INSERT INTO companyproject SET ?`
          db.query(query, projectData, async (err, result, fields) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },

      deleteNewProjectByIDModel: (projectID) => {
        return new Promise((resolve, reject) => {
          const query = `DELETE FROM companyproject WHERE ?`
          db.query(query,{ projectID: projectID }, async (error, results, _fields) => {
            if (!error) {
              resolve(results)
            } else {
              reject(error)
            }
          })
        })
      },
      
      updateProjectByIDModel: (projectID, data) => {
        return new Promise((resolve, reject) => {
          const query = `
            UPDATE companyproject
               SET ?
             WHERE projectID = ${projectID}
          `
          db.query(query, data, (error, result, _fields) => {
            if (!error) {
              resolve(result)
            } else {
              reject(error)
            }
          })
        })
      }
}