const { getAllTalentSkillModel, getTalentSkillByTalentIDModel, createTalentSkillModel, deleteTalentSkillModel, putTalentSkillModel, patchTalentSkillModel } = require('../models/talentSkill')

module.exports = {
    getAllTalentSkill: (req, res) => {
        let { search, limit, page } = req.query
        let searchKey = ''
        let searchValue = ''
    
        if (typeof search === 'object') {
          searchKey = Object.keys(search)[0]
          searchValue = Object.values(search)[0]
        } else {
          searchKey = 'talentName'
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
            message: 'Talent Skill List',
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
    getTalentSkillByTalentID: async (req,res) => {
        try {
          const { talentID } = req.params
    
          const result = await getTalentSkillByTalentIDModel(talentID)
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Talent Skill with id ${talentID}`,
              data: result[0]
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Talent SKill data with id ${talentID} Not Found!`
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
    
      createTalentSkill: async (req,res) => {
        try {
          const { talentName, talentEmail, skill_1, skill_2, skill_3, skill_4, skill_5, updatedAt } = req.body
          const result = await createTalentSkillModel(talentName, talentEmail, skill_1, skill_2, skill_3, skill_4, skill_5, updatedAt)
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

      deleteTalentSkill: async (req,res) => {
        try {
          const {talentID} = req.params
  
          const resSelect = await getTalentSkillByTalentIDModel (talentID)
          if (resSelect.length) {
            const resDelete = await deleteTalentSkillModel(talentID)
            if (resDelete.affectedRows) {
              res.status(200).send({
                success: true,
                message: `Talent Skill With id ${talentID} has been deleted succesfully`
              })
            } else {
              res.status(404).send({
                success: false,
                message: 'Failed to delete talent skill'
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
            message: 'Internal server error, Please Try Again Later'
          })
        }
      },

      putTalentSkill: async (req,res) => {
        try {
          const { talentID } = req.params
          const { talentName, talentEmail, skill_1, skill_2, skill_3, skill_4, skill_5, updatedAt } = req.body
    
          if (talentName.trim() && talentEmail.trim() &&  skill_1.trim() && skill_2.trim() && skill_3.trim() && skill_4.trim() && skill_5 && updatedAt.trim()) {
            const resSelect = await getTalentSkillByTalentIDModel(talentID)
            if (resSelect.length) {
              const resUpdate = await putTalentSkillModel(talentID, talentName, talentEmail, skill_1, skill_2, skill_3, skill_4, skill_5, updatedAt)
              if (resUpdate.affectedRows) {
                res.status(200).send({
                  success: true,
                  message: `Talent Skill with id ${talentID} updated succesfully`
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
                message: `Talent Skill with id ${talentID} not found`
              })
            }
          } else {
            res.status(400).send({
              success: false,
              message: 'Please fill all field!'
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

      patchTalentSkill: async (req, res) => {
        try {
          const { talentID } = req.params
          const {
            talentName = '', 
            talentEmail = '', 
            skill_1 = '', 
            skill_2 = '', 
            skill_3 = '',
            skill_4 = '',
            skill_5 = '', 
            updatedAt = ''
          } = req.body
    
          if (talentName.trim() || talentEmail.trim() ||  skill_1.trim() || skill_2.trim() || skill_3.trim() || skill_4.trim() || skill_5 || updatedAt.trim()) {
            const resSelect = await getTalentSkillByTalentIDModel(talentID)
            if (resSelect.length) {
              const dataColumn = Object.entries(req.body).map(item => {
                const queryDynamic = parseInt(item[1]) > 0 ? `${item[0] = item[1]}` : `${item[0]}='${item[1]}'`
                return queryDynamic
              })
    
              const resUpdate = await patchTalentSkillModel(dataColumn, talentID)
              if (resUpdate.affectedRows) {
                res.status(200).send({
                  success: true,
                  message: `Talent skill with id ${talentID} updated succesfully`
                })
              } else {
                res.status(400).send({
                  success: false,
                  message: 'Talent skill data failed to update'
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
      }
}