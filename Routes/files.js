const express = require("express");
const router = express.Router();
const File = require("../Models/file");

//Get all files
router.get("/", async (req, res) => {
    try {
        const files = await File.find();
        res.json(files);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.get("/:fileName", async (req, res) => {
    try {
        const files = await File.find({fileName: req.params.fileName});
        res.json(files);
    } catch (err) {
        res.json({message: err.message});
    }
});

module.exports = router;