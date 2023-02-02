const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()
const {
     loginUser,
     signupUser,
} = require('../controller/credentialsController')

router.use(requireAuth)

/**CREATE NEW Credentials */
router.post('/login', loginUser)

/**GET ALL CredentialsS */
router.post('/signup', signupUser)



module.exports = router