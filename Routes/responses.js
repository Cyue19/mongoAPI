const express = require("express");
const router = express.Router();
const db = require("../Databases/response");

//Get the deployment numbers
router.get("/deployments", async (req, res) => {
    try {
        const responses = await db.getDeployments();
        res.json(responses);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
});

//Get pain files by deployment
router.get("/pain/:deployment", async (req, res) => {
    try {
        const responses = await db.getPainResponses(req.params.deployment);
        res.json(responses);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
});

//Get last pain response by deployment
router.get("/pain/last/:deployment", async (req, res) => {
    try {
        const responses = await db.getPainResponses(req.params.deployment);
        res.json(responses[0]);
    } catch (err) {
        console.log(err);
        res.status.json({message: err.message});
    }
})

//Get the counts for pain response questionOneAnswer
router.get("/pain/counts/:deployment", async (req, res) => {
    try {
        const files = await db.getPainCounts(req.params.deployment);
        res.json(files);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//Get all end of day responses 
router.get("/end_of_day/:deployment", async (req, res) => {
    try {
        const responses = await db.getEndOfDayResponses(req.params.deployment);
        res.json(responses);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
});

//Get all follow up responses
router.get("/follow_up/:deployment", async (req, res) => {
    try {
        const responses = await db.getFollowUpResponses(req.params.deployment);
        res.json(responses);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
});

//Get last follow_up file
router.get("/follow_up/last/:deployment", async (req, res) => {
    try {
        const files = await db.getFollowUpRecent(req.params.deployment);
        res.json(files[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//Get the counts for all follow_up question1 responses 
router.get("/follow_up/q1/:deployment", async (req, res) => {
    try {
        const files = await db.getFollowUpQ1(req.params.deployment);
        res.json(files);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//Get last end_of_day file
router.get("/end_of_day/last/:deployment", async (req, res) => {
    try {
        const files = await db.getEndOfDayRecent(req.params.deployment);
        res.json(files[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//Get the counts for all follow_up question1 responses 
router.get("/end_of_day/q1/:deployment", async (req, res) => {
    try {
        const files = await db.getEndOfDayQ1(req.params.deployment);
        res.json(files);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;