const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createDtr,
     getAllDtr,
} = require('../controller/dtrController')
router.use(requireAuth)


/**CREATE NEW DTR */
router.post('/', createDtr)

/**GET ALL DTR */
router.get('/', getAllDtr)





module.exports = router