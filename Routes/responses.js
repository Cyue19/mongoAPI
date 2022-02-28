const express = require("express");
const router = express.Router();
const db = require("../Databases/response");

//Get all pain files 
router.get("/pain", async (req, res) => {
    try {
        const responses = await db.getPainResponses();
        res.json(responses);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
});

//Get all end of day responses 
router.get("/end_of_day", async (req, res) => {
    try {
        const responses = await db.getEndOfDayResponses();
        res.json(responses);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
});

//Get all follow up responses
router.get("/follow_up", async (req, res) => {
    try {
        const responses = await db.getFollowUpResponses();
        res.json(responses);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
});


module.exports = router;