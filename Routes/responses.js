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

//Get last follow_up file
router.get("/follow_up/last", async (req, res) => {
    try {
        const files = await db.getFollowUpRecent();
        res.json(files[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//Get the counts for all follow_up question1 responses 
router.get("/follow_up/q1", async (req, res) => {
    try {
        const files = await db.getFollowUpQ1();
        res.json(files);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//Get last end_of_day file
router.get("/end_of_day/last", async (req, res) => {
    try {
        const files = await db.getEndOfDayRecent();
        res.json(files[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//Get the counts for all follow_up question1 responses 
router.get("/end_of_day/q1", async (req, res) => {
    try {
        const files = await db.getEndOfDayQ1();
        res.json(files);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;