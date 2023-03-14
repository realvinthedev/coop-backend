const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createDtr,
     getAllDtr,
     getAllDtrByDate,
     getSingleDtr
} = require('../controller/dtrController')
router.use(requireAuth)


/**CREATE NEW DTR */
router.post('/', createDtr)

/**GET ALL DTR */
router.get('/', getAllDtr)

/**GET SINGLE EMPLOYEE */
router.get('/:date', getAllDtrByDate)
router.get('/employee/:employee_id', getSingleDtr)





module.exports = router