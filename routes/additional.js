const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createAdditional,
     getAllAdditional,
     getAllAdditionalByDate
} = require('../controller/additionalController')
router.use(requireAuth)



router.post('/', createAdditional)


router.get('/', getAllAdditional)


router.get('/:date', getAllAdditionalByDate)





module.exports = router