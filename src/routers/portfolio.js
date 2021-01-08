const { Router } = require('express')
const { getPortfolio, getPortfolioByID, getPortfolioByOwnerID, createPortfolio, updatePortfolio, deletePortfolio } = require('../controllers/portfolio')

const router = Router()

const { allMemberAuthorization, talentAuthorization } = require('../middleware/auth')
const uploadImage = require('../middleware/multer_portfolio')

router.get('/', allMemberAuthorization, getPortfolio)
router.get('/:portfolioID', allMemberAuthorization, getPortfolioByID)
router.get('/owner/:portfolio_owner', allMemberAuthorization, getPortfolioByOwnerID)
router.post('/createportfolio', talentAuthorization, uploadImage, createPortfolio)
router.put('/:portfolioID', talentAuthorization, uploadImage, updatePortfolio)
router.delete('/:portfolioID', talentAuthorization, deletePortfolio)

module.exports = router