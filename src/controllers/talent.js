const { getTalentByIDModel, getTalentByAccountIDModel, filterTalentByNameModel, filterTalentByLocationModel, filterTalentByTitleModel, filterTalentByWorkTimeModel, updateTalentModel } = require('../models/talent')

module.exports = {

  //Get A Talent By Their ID 
  getTalentByID: async (req, res, _fields) => {
    const { talentID } = req.params

    try {
      const result = await getTalentByIDModel(talentID)

      if(result.length){
        res.status(200).send({
          success: true,
          message: `Talent with id ${talentID}`,
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'Talent Not Found!'
        })
      }
    }
    catch (error) {
      console.log(error)
      req.status(500).send({
      success: false,
      message: 'Internal server error, Please try again later!'
      })
    }
   },

   //Get A Talent By Their accountID 
  getTalentByAccountID: async (req, res, _fields) => {
    const { accountID } = req.params

    try {
      const result = await getTalentByAccountIDModel(accountID)

      if(result.length){
        res.status(200).send({
          success: true,
          message: `Talent with account id ${accountID}`,
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'Talent Not Found!'
        })
      }
    }
    catch (error) {
      console.log(error)
      req.status(500).send({
      success: false,
      message: 'Internal server error, Please try again later!'
      })
    }
   },

  //Filter Talent By Name
  filterTalentByName: (req, res) => {
    let { search, limit, page } = req.query
    let searchKey = ''
    let searchValue = ''

    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'account_name'
      searchValue = search || ''
    }

    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const offset = (page - 1) * limit

    filterTalentByNameModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Filtering talent with that name..',
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'Talent Not Found!'
        })
      }
    })
  },

  // Filter Talent By Location
  filterTalentByLocation: (req, res) => {
    let { search, limit, page } = req.query
    let searchKey = ''
    let searchValue = ''

    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'talent_city'
      searchValue = search || ''
    }

    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const offset = (page - 1) * limit

    filterTalentByLocationModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Filtering Talent By Location..',
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'Location Not Found!'
        })
      }
    })
  },

  //Filter Talent By Job title
  filterTalentByTitle: (req, res) => {
    let { search, limit, page } = req.query
    let searchKey = ''
    let searchValue = ''

    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'talent_tittle'
      searchValue = search || ''
    }

    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const offset = (page - 1) * limit

    filterTalentByTitleModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Filtering Talent By Title..',
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'Sorry, We not find any talent with that tittle'
        })
      }
    })
  },

  //Filter Talent By Work Time
  filterTalentByWorkTime: (req, res) => {
    let { search, limit, page } = req.query
    let searchKey = ''
    let searchValue = ''

    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'talent_time'
      searchValue = search || ''
    }

    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const offset = (page - 1) * limit

    filterTalentByWorkTimeModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Filtering Talent By Work Time..',
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'We Only Have Fulltime or Freelance Worker here, Please Try Again.'
        })
      }
    })
  },

  updateTalent: async (req, res, _fields) => {
    const { talentID } = req.params
    req.body.talent_image = req.file === undefined ? '' : req.file.filename

    const data = {
      ...req.body,
      talent_image: req.body.talent_image
    }
    delete data.talent_image

    try {
      const caughtData = await getTalentByIDModel(talentID)

      if (caughtData.length) {
        const result = await updateTalentModel(talentID, req.body)
          if (result.affectedRows) {
            res.status(200).send({
              success: true,
              message: `Talent with id ${talentID} updated succesfully`
            })
          } else {
            res.status(400).send({
              success: false,
              message: 'Failed to update talent'
            })
          }
        } else {
          res.status(404).send({
            success: false,
            message: `Talent data with id ${talentID} Not Found!`
          })
        }      
      } catch (error) {
        console.log(error)
        res.status(500).send({
          success: false,
          message: 'Internal Server Error, Please try again later'
        })
    }
  }
}