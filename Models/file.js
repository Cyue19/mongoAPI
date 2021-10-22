const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    eTag: String,
    fileName: String,
    location: String,
    lastModified: String,
    size: Number
}, {collection: "Files"});

module.exports = mongoose.model("File", fileSchema);