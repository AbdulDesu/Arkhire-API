const { getFullTalentDataModel } = require('../models/talentFullData')

module.exports = {
  getTalentFullData: (req, res) => {
    let { search, limit, page } = req.query
    let searchKey = ''
    let searchValue = ''

    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'name'
      searchValue = search || ''
    }

    if (!limit) {
      limit = 50
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const offset = (page - 1) * limit

    getFullTalentDataModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Full Data Talent List',
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'Data Talent Not Found!'
        })
      }
    })
  }
}
