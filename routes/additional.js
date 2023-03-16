const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createAdditional,
     getAdditionalById,
     getAllAdditionalByDate
} = require('../controller/additionalController')
router.use(requireAuth)



router.post('/', createAdditional)


router.get('/additional/:employee_id', getAdditionalById)


router.get('/additional/:date', getAllAdditionalByDate)





module.exports = router