const {query} = require('express')
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const db = require('./src/helpers/db')

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}))

app.get('/', (request, response) => {
    response.send('Welcome to Arkhire, Your Hiring Apps')
})

//GET Talent
app.get('/talent', (req,res) => {
    db.query(`SELECT * FROM talent`, (err, result, fields) => {
        if (!err) {
          if (result.length) {
            res.status(200).send({
              success: true,
              message: 'Talent-List',
              data: result
            })
          } else {
            res.status(404).send({
              success: false,
              message: 'Error Item Not Found'
            })
          }      
        } else {
          res.status(500).send({
            success: false,
            message: 'Internal Server has error, Please Try Again Later'
          })
        }
    
      })
})

//POST Talent
app.post('/talent', (req,res) => {
    const {talentID, name, email, noHp, password, status, createdAt, updatedAt} = req.body

    db.query(`INSERT INTO talent (talentID, name, email, noHp, password, status, createdAt, updatedAt)
    VALUES ('${talentID}', '${name}', '${email}', '${noHp}', '${password}', '${status}', '${createdAt}', '${updatedAt}')`,
    (err,result,fields) => {
        if (!err) {
            if (result.affectedRows) {
              res.status(200).send({
                success: true,
                message: 'Add talent succesfully'
              })
            } else {
              res.status(400).send({
                success: false,
                message: 'Failed to add talent'
              })
            }
          } else {
            res.status(500).send({
              success: false,
              message: 'Internal Server has error, Please Try Again Later'
            })
          }
    })
})

//DELETE Talent
app.delete('/talent/:talentID', (req,res) => {
    const {talentID} = req.params

    db.query(`SELECT * FROM talent WHERE talentID = ${talentID}`, (err,result,fields) =>{
        if (result.length) {

            db.query(`DELETE FROM talent WHERE talentID = ${talentID}`, (err, result, fields) => {
              if (result.affectedRows) {
                res.status(200).send({
                  success: true,
                  message: `Talent with id ${talentID} succesfully deleted`
                })
              } else {
                res.status(404).send({
                  success: false,
                  message: 'Failed delete talent, Not Found!'
                })
              }
            })
      
          } else {
            res.status(404).send({
              success: false,
              message: 'Talent Not Found'
            })
          }
    })
})

//UPDATE Talent
app.put('/talent/:talentID', (req,res) => {
    const { talentID } = req.params
    const { name, email, noHp, password, status, updatedAt } = req.body

    if (name.trim() && email.trim() &&  noHp.trim() && password.trim() && status.trim() && updatedAt.trim()) {
        db.query(`SELECT * FROM talent WHERE talentID = ${talentID}`, (err, result, fields) => {
          if (result.length) {
            db.query(`UPDATE talent SET name = '${name}', email = '${email}', noHp = '${noHp}', password = '${password}', status = '${status}', updatedAt = '${updatedAt}' WHERE talentID = ${talentID}`, 
            (err, result, fields) => {
              if (result.affectedRows) {
                res.status(200).send({
                  success: true,
                  message: `Talent id ${talentID} has been updated succesfully`
                })
              } else {
                res.status(400).send({
                  success: false,
                  message: 'Failed to update talent data!'
                })
              }
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Talent with id ${talentID} not found. Try Again`
            })
          }
        })
      } else {
        res.status(400).send({
          success: false,
          message: 'Please fill all field'
        })
      }
})

//PATCH Talent
app.patch('/talent/:talentID', (req,res) => {
    const { talentID } = req.params
    const { 
        name = '', 
        email = '', 
        noHp = '', 
        password = '', 
        status = '', 
        updatedAt = ''
    } = req.body
  
    if (name.trim() || email.trim() ||  noHp.trim() || password.trim() || status.trim() || updatedAt.trim()) { 
      db.query(`SELECT * FROM talent WHERE talentID = ${talentID}`, (err, result, fields) => {
        if (result.length) {
  
          const dataColumn = Object.entries(req.body).map(item => {
            return parseInt(item[1]) > 0 ? `${item[0]=item[1]}` : `${item[0]}='${item[1]}'`
          })
  
          db.query(`UPDATE talent SET ${dataColumn} WHERE talentID = ${talentID}`, (err, result, fields) => {
            if (result.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Talent with id ${talentID} has been updated succesfully!`
              })
            } else {
              res.status(400).send({
                success: false,
                message: 'Failed while updating talent data'
              })
            }
          })
  
        } else {
          res.status(404).send({
            success: false,
            message: `Talent with id ${talentID} not found`
          })
        }
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Please Fill all Field!'
      })
    } 
})

//GET Talent by id
app.get('/talent/:talentID', (req,res) => {
    const { talentID } = req.params

    db.query(`SELECT * FROM talent WHERE talentID = ${talentID}`, (err, result, fields) => {
        if (!err) {
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Talent with id ${talentID}`,
              data: result[0]
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Talent with id ${talentID} not found!`
            })
          }
        } else {
          req.status(500).send({
            success: false,
            message: 'Internal server got error, please try again later'
          })
        }
      })
})

app.listen(port,() => {
    console.log(`Arkhire Express running at http://localhost:${port}`)
})