const { getFullTalentDataModel} = require('../models/talentFullData')

module.exports = {
    getTalentFullData: async (req,res) => {
        try {
          const { talentID } = req.params
    
          const result = await getFullTalentDataModel(talentID)
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Talent with id ${talentID}`,
              data: result[0]
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Talent data with id ${talentID} Not Found!`
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
}