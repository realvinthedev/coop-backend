const express = require('express');
const { upload, uploadTemplate } = require('../controller/uploadController'); // Import the upload controller
const router = express.Router();

// Define the upload route
router.post('/upload', upload.single('template'), uploadTemplate); // 'template' is the field name in your form

module.exports = router;
