const { getAllProjectResponseModel, getProjectResponseByOwnerIDModel, getProjectResponseByTargetAccountIDModel, getProjectHighlightModel } = require('../models/projectresp')

module.exports = {

    getAllProjectResponse: (req, res) => {
      let { search, limit, page } = req.query
      let searchKey = ''
      let searchValue = ''
  
      if (typeof search === 'object') {
        searchKey = Object.keys(search)[0]
        searchValue = Object.values(search)[0]
      } else {
        searchKey = 'project_tittle'
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
  
     getAllProjectResponseModel(searchKey, searchValue, limit, offset, result => {
        if (result.length) {
          res.status(200).send({
            success: true,
            message: 'Showing All talent Response..',
            data: result
          })
        } else {
          res.status(404).send({
            success: false,
            message: 'Project/Response Not found!'
          })
        }
      })
    },

    getProjectResponseByOwnerID: async (req, res) => {
      try {
        const { project_owner } = req.params
  
        const result = await getProjectResponseByOwnerIDModel(project_owner)
        if (result.length) {
          res.status(200).send({
            success: true,
            message: `Project with owner company id ${project_owner}`,
            data: result
          })
        } else {
          res.status(404).send({
            success: false,
            message: `Project data with owner company id ${project_owner} Not Found!`
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

    getProjectResponseByTargetID: async (req, res) => {
      try {
        const { project_target } = req.params
  
        const result = await getProjectResponseByTargetAccountIDModel(project_target)
        if (result.length) {
          res.status(200).send({
            success: true,
            message: `Project with target account id ${project_target}`,
            data: result
          })
        } else {
          res.status(404).send({
            success: false,
            message: `Project data with target account id ${project_target} Not Found!`
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

    
    getProjectHighlight: async (req, res) => {
      try {
        const { project_target } = req.params
  
        const result = await getProjectHighlightModel(project_target)
        if (result.length) {
          res.status(200).send({
            success: true,
            message: `Project with target account id ${project_target}`,
            data: result
          })
        } else {
          res.status(404).send({
            success: false,
            message: `Project data with target account id ${project_target} Not Found!`
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