const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createPayslip,
     getSinglePayslip,
     deleteSinglePayslip,
     getAllPayslip
} = require('../controller/payslipController')
router.use(requireAuth)


/**CREATE NEW Payslip */
router.post('/', createPayslip)

/**GET SINGLE Payslip */
router.get('/:id', getSinglePayslip)

/**GET all Payslip */
router.get('/:id', getAllPayslip)

/**DELETE SINGLE Payslip */
router.delete('/:id', deleteSinglePayslip)




module.exports = router