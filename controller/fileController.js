const File = require('../model/fileModel');

// Handle the file upload request
const uploadTemplate = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // Save file details in MongoDB
    try {
        // Assuming the uploaded file is always named 'template.xlsx'
        const file = new File({
            filename: 'template.xlsx', // Use a fixed filename
            path: req.file.path
        });
        await file.save();

        res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    } catch (error) {
        res.status(500).json({ error: 'Error saving file metadata to MongoDB' });
    }
};

module.exports = {
    uploadTemplate
};
