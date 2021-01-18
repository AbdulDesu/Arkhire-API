const { getAllTalentAchivementModel,getTalentAchivementByTalentIDModel, updateTalentAchivementModel } = require('../models/achivement')

module.exports = {

  getAllTalentAchivement: (req, res) => {
    let { search, limit, page } = req.query
    let searchKey = ''
    let searchValue = ''

    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'achivementID'
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

    getAllTalentAchivementModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Showing All Talent Achivement..',
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

    getAchivementByTalentID: async (req, res) => {
        const { talentID } = req.params
    
        try {
          const result = await getTalentAchivementByTalentIDModel(talentID)
    
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Talent Achivement with id talent ${talentID}`,
              data: result
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Achivement data with id talent ${talentID} Not Found!`
            })
          }
        } catch (error) {
          console.log(error)
          req.status(500).send({
            success: false,
            message: 'Internal server error, Please try again later'
          })
        }
      },

    updateTalentAchivement: async (req, res) => {
      const { talentID } = req.params
      req.body.talent_cv = req.file === undefined ? '' : req.file.filename

    const data = {
      ...req.body,
      talent_cv: req.body.talent_cv
    }
    
    delete data.talent_cv

        try {
          const catchData = await getTalentAchivementByTalentIDModel(talentID)
    
          if (catchData.length) {
            const result = await updateTalentAchivementModel(talentID, req.body)
    
            if (result.affectedRows) {
                res.status(200).send({
                  success: true,
                  message: `Achivement Updated Succesfully`
                })
              } else {
                console.log(error)
                res.status(404).send({
                  success: false,
                  message: 'Achivement Not Found!'
                })
              }
            }
          } catch (error) {
            console.log(error)
            req.status(500).send({
            success: false,
            message: 'Internal server error, Please try again later!'
            })
          }
      },


      updateGithub: async (req, res) => {
        
        const { talentID } = req.params

          try {
            const catchData = await getTalentAchivementByTalentIDModel(talentID)
      
            if (catchData.length) {
              const result = await updateTalentAchivementModel(talentID, req.body)
      
              if (result.affectedRows) {
                  res.status(200).send({
                    success: true,
                    message: `Achivement Updated Succesfully`
                  })
                } else {
                  console.log(error)
                  res.status(404).send({
                    success: false,
                    message: 'Achivement Not Found!'
                  })
                }
              }
            } catch (error) {
              console.log(error)
              req.status(500).send({
              success: false,
              message: 'Internal server error, Please try again later!'
              })
            }
        }
}