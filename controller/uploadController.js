const multer = require('multer');

// Set up Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Keep the original filename
    },
});

// Create the upload middleware
const upload = multer({ storage: storage });

module.exports = {
    upload, // Exporting upload middleware
};
