const express = require('express');
const {upload} = require('../controller/uploadController');
const {uploadTemplate} = require('../controller/fileController');
const router = express.Router();
const path = require('path');

// Define the upload route
router.post('/upload', upload.single('template'), uploadTemplate); // 'template' is the field name in your form

// Add logic to send the template file as a response if needed
router.get('/template', (req, res) => {
    const filePath = path.join(__dirname, '../uploads/template.xlsx'); // Adjust this to the actual path of your template
    res.download(filePath, 'template.xlsx', (err) => {
        if (err) {
            console.error('Error sending template:', err);
            res.status(500).send('Error downloading template');
        }
    });
});

module.exports = router;
