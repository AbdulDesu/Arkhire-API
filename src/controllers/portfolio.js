const { getAllPortfolioModel, getPortfolioByIDModel, getPortfolioByOwnerIDModel, createPortfolioModel, updatePortfolioModel } = require('../models/portfolio')
module.exports = {
    getPortfolio: (req, res) => {
        let { search, limit, page } = req.query
        let searchKey = ''
        let searchValue = ''
    
        if (typeof search === 'object') {
          searchKey = Object.keys(search)[0]
          searchValue = Object.values(search)[0]
        } else {
          searchKey = 'portfolio_owner'
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
    
        getAllPortfolioModel(searchKey, searchValue, limit, offset, result => {
          if (result.length) {
            res.status(200).send({
              success: true,
              message: 'Portfolio List',
              data: result
            })
          } else {
            res.status(404).send({
              success: false,
              message: 'Portfolio Not Found!'
            })
          }
        })
      },

      getPortfolioByID: async (req, res) => {
        try {
          const { portfolioID } = req.params
    
          const result = await getPortfolioByIDModel(portfolioID)
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Portfolio with id ${portfolioID}`,
              data: result
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Portfolio data with id ${portfolioID} Not Found!`
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

      getPortfolioByOwnerID: async (req, res) => {
        try {
          const { portfolio_owner } = req.params
    
          const result = await getPortfolioByOwnerIDModel(portfolio_owner)
          if (result.length) {
            res.status(200).send({
              success: true,
              message: `Portfolio with owner id ${portfolio_owner}`,
              data: result
            })
          } else {
            res.status(404).send({
              success: false,
              message: `Portfolio data with owner id ${portfolio_owner} Not Found!`
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

      createPortfolio: async (req, res) => {
        req.body.portfolio_image = req.file === undefined ? '' : req.file.filename
  
      const data = {
        ...req.body,
        portfolio_image: req.body.portfolio_image
      }
      
      delete data.portfolio_image
      
        try {
          const result = await createPortfolioModel(req.body)
          if (result.affectedRows) {
            res.status(200).send({
              success: true,
              message: 'Experience Created!'
            })
          } else {
            res.status(400).send({
              success: false,
              message: 'Failed to add experience'
            })
          }
        } catch (error) {
          console.log(error)
          res.status(500).send({
            success: false,
            message: 'Internal Server Error, Please try again later'
          })
        }
      },

      updatePortfolio: async (req, res) => {
        const { portfolioID } = req.params
        req.body.portfolio_image = req.file === undefined ? '' : req.file.filename
  
      const data = {
        ...req.body,
        portfolio_image: req.body.portfolio_image
      }
      
      delete data.portfolio_image
  
          try {
            const catchData = await getPortfolioByIDModel(portfolioID)
      
            if (catchData.length) {
              const result = await updatePortfolioModel(portfolioID, req.body)
              if (result.affectedRows) {
                  res.status(200).send({
                    success: true,
                    message: `Portfolio Updated Succesfully`
                  })
                } else {
                  console.log(error)
                  res.status(404).send({
                    success: false,
                    message: 'Portfolio Not Found!'
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