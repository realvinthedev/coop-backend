const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
     createEmployee,
     getAllEmployees,
     getSingleEmployee,
     deleteSingleEmployee,
     updateSingleEmployee
} = require('../controller/employeeController')
router.use(requireAuth)


/**CREATE NEW EMPLOYEE */
router.post('/', createEmployee)

/**GET ALL EMPLOYEES */
router.get('/', getAllEmployees)

/**GET SINGLE EMPLOYEE */
router.get('/:id', getSingleEmployee)

/**DELETE SINGLE EMPLOYEE */
router.delete('/:id', deleteSingleEmployee)

/**EDIT SINGLE EMPLOYEE */
router.patch('/:id', updateSingleEmployee)





module.exports = router