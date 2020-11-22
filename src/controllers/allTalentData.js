const { getAllTalentDataModel } = require('../models/allTalentData')

module.exports = {
    getAllTalentData: (req, res) => {
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
    
        getAllTalentDataModel(searchKey, searchValue, limit, offset, result => {
          if (result.length) {
            res.status(200).send({
              success: true,
              message: 'Showing All talent Data..',
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
}