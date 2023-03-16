const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createAdditional,
     getAdditionalById,
     getAllAdditionalByDate,
     getAllAdditional
} = require('../controller/additionalController')
router.use(requireAuth)



router.post('/', createAdditional)

router.get('/', getAllAdditional)


router.get('/:employee_id', getAdditionalById)


router.get('/date/:date', getAllAdditionalByDate)





module.exports = router