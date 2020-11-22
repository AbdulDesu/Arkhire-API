const { getAllTalentSkillModel, getAllTalentSkillByTalentIDModel , createTalentSkillModel, updateTalentSkillModel} = require('../models/talentSkill')

module.exports = {
  
  getAllTalentSkill: (req, res) => {
    let { search, limit, page } = req.query
    let searchKey = ''
    let searchValue = ''

    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'skillID'
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

    getAllTalentSkillModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'Showing Talent skill..',
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

  getTalentSkillByTalentID : async (req,res) => {
    try {
      const { talentID } = req.params
      const result = await getAllTalentSkillByTalentIDModel(talentID)
      if (result.length) {
        res.status(200).send({
          success: true,
          message: `Skill Talent with id ${talentID}`,
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: `Talent Skill with data id ${talentID} Not Found!`
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

  createTalentSkill: async (req, res) => {
    try {
      const result = await createTalentSkillModel(req.body)
      if (result.affectedRows) {
        res.status(200).send({
          success: true,
          message: 'Talent Skill added succesfully'
        })
      } else {
        res.status(400).send({
          success: false,
          message: 'Failed to add talent'
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal Server Error, Please try again later'
      })
    }
  },

  updateTalentSkill: async (req, res) => {
    try {
      const { talentID } = req.params
      const getData = await getAllTalentSkillByTalentIDModel(talentID, req.body)

        if (getData.length) {
          const resUpdate = await updateTalentSkillModel( talentID, req.body)
          if (resUpdate.affectedRows) {
            res.status(200).send({
              success: true,
              message: `Talent with id ${talentID} skill updated succesfully`
            })
          } else {
            res.status(404).send({
              success: false,
              message: 'Talent Skill update failed'
            })
          }
        } else {
          res.status(404).send({
            success: false,
            message: `Talent with id ${talentID} not found`
          })
        }
      
    } catch (error) {
      console.log(error)
      req.status(500).send({
        success: false,
        message: 'Internal server error, Please try again later'
      })
    }
  }
}
