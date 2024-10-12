const express = require('express');
const router = express.Router();
const fileController = require('../controller/fileController');
const { upload } = require('../controller/uploadController');

// Upload route
router.post('/upload', upload.single('template'), fileController.uploadTemplate);

module.exports = router;
