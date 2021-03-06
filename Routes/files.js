const express = require("express");
const router = express.Router();
const File = require("../Models/file");

//Get all files
router.get("/", async (req, res) => {
    try {
        const files = await File.find().sort([['lastModified', -1]]);
        res.json(files);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//Get last file
router.get("/last", async (req, res) => {
    try {
        const files = await File.find().sort([['lastModified', -1]]);
        res.json(files[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.get("/byDate", async (req, res) => {
    try {
        const files = await File.aggregate([{ "$group": {
            _id: {
                $dateToString: {
                    date: {$dateFromString: {dateString: '$lastModified'}},
                    "format": "%Y-%m-%d"
                }
            }, 
            count: { $sum:1 }
        }}, {"$sort": {_id: -1 }}]);
        res.json(files);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//search by fileName
// router.get("/search/:fileName", async (req, res) => {
//     try {
//         const files = await File.find({fileName: req.params.fileName});
//         res.json(files);
//     } catch (err) {
//         res.json({message: err.message});
//     }
// });

//search for files
router.get("/search", async (req, res) => {
    try {
        const files = await File.find(req.query);
        res.json(files);
    } catch(err) {
        res.json({message: err.message});
    }
});


module.exports = router;