const {createUser,getOne,estimatedUsage,paybills} = require('../Controller/userController')
const router = require ('express').Router()

router.post('/createuser',createUser)
router.get('/getOne:id',getOne)
router.put('/updateusage',estimatedUsage)
router.put('/payment',paybills)

module.exports = router   