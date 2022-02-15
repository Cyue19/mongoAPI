const express = require("express");
const router = express.Router();
const db = require("../Databases/response");

//Get all files
router.get("/pain", async (req, res) => {
    try {
        const responses = await db.getPainResponses();
        res.json(responses);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
});


module.exports = router;