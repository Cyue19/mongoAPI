const express = require("express");
const router = express.Router();

//Get all pain example
router.get("/", async (req, res) => {
    res.json({ message: "this works" });
});


module.exports = router;