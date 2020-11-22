const { Router } = require('express')
const { loginAccount, getAllAccount, getAccountByID, createAccount, updateAccount } = require('../controllers/account')
const router = Router()

const {
    adminAuthorization,
    allMemberAuthorization
} = require('../middleware/auth')


router.get('/admin', adminAuthorization, getAllAccount)
router.get('/:accountID', adminAuthorization, getAccountByID)
router.post('/register', createAccount)
router.post('/login', loginAccount)
router.put('/:accountID', allMemberAuthorization, updateAccount)


module.exports = router
