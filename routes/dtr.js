const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createDtr,
     getAllDtr,
     getAllDtrByDate
} = require('../controller/dtrController')
router.use(requireAuth)


/**CREATE NEW DTR */
router.post('/', createDtr)

/**GET ALL DTR */
router.get('/', getAllDtr)

/**GET SINGLE EMPLOYEE */
router.get('/:id', getAllDtrByDate)





module.exports = router