const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    hashPassword: (req, _res, next) => {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (!err) {
              req.body.password = hash
              next()
            } else {
              console.error(err)
            }
          })
    },

    talentAuthorization: (request, response, next) => {
        let token = request.headers.authorization
        if (token) {
          token = token.split(' ')[1]
          jwt.verify(token, process.env.JWT_KEY, (error, result) => {
            if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
              response.status(403).send({
                success: false,
                message: error.message
              })
            } else {
              if (result.privilege === 0 || result.privilege == process.env.ADMIN_KEY) {
                next()
              } else {
                response.status(403).send({
                  success: false,
                  message: 'You can not access this database!'
                })
              }
            }
          })
        } else {
          response.status(400).send({
            success: false,
            message: 'Please login first!'
          })
        }
      },

      companyAuthorization: (request, response, next) => {
        let token = request.headers.authorization
        if (token) {
          token = token.split(' ')[1]
          jwt.verify(token, process.env.JWT_KEY, (error, result) => {
            if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
              response.status(403).send({
                success: false,
                message: error.message
              })
            } else {
              if (result.privilege === 1 || result.privilege == process.env.ADMIN_KEY) {
                next()
              } else {
                response.status(403).send({
                  success: false,
                  message: 'You can not access this database!'
                })
              }
            }
          })
        } else {
          response.status(400).send({
            success: false,
            message: 'Please login first!'
          })
        }
      },

      allMemberAuthorization: (request, response, next) => {
        let token = request.headers.authorization
        if (token) {
          token = token.split(' ')[1]
          jwt.verify(token, process.env.JWT_KEY, (error, result) => {
            if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
              response.status(403).send({
                success: false,
                message: error.message
              })
            } else {
              if (result.privilege === 1 || result.privilege === 2 || process.env.ADMIN_KEY) {
                next()
              } else {
                response.status(403).send({
                  success: false,
                  message: 'You can not access this database, Register First!'
                })
              }
            }
          })
        } else {
          response.status(400).send({
            success: false,
            message: 'Please login first!'
          })
        }
      },

      adminAuthorization: (request, response, next) => {
        let token = request.headers.authorization
        if (token) {
          token = token.split(' ')[1]
          jwt.verify(token, process.env.JWT_KEY, (error, result) => {
            if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
              response.status(403).send({
                success: false,
                message: error.message
              })
            } else {
              if (result.privilege == process.env.ADMIN_KEY) {
                next()
              } else {
                response.status(403).send({
                  success: false,
                  message: 'You can not access this database!, Contact Admin First!'
                })
              }
            }
          })
        } else {
          response.status(400).send({
            success: false,
            message: 'Please login first!'
          })
        }
      }
}