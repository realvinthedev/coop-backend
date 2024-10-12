const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('File', fileSchema);