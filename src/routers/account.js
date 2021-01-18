const { Router } = require('express')
const { loginAccount, getAllAccount, getAccountByID, createAccount, updateAccount, updatePassword } = require('../controllers/account')
const router = Router()

const {
    adminAuthorization,
    allMemberAuthorization
} = require('../middleware/auth')

const {
    hashPassword
} = require('../middleware/auth')

router.get('/admin', adminAuthorization, getAllAccount)
router.get('/:accountID', allMemberAuthorization, getAccountByID)
router.post('/register', createAccount)
router.post('/login', loginAccount)
router.put('/:accountID', allMemberAuthorization, updateAccount)
router.put('/password/:accountID', allMemberAuthorization, hashPassword, updatePassword)


module.exports = router
