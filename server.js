require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//app.set("view engine", "ejs");
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json());
app.use(cors());

const filesRouter = require("./Routes/files");
app.use("/files", filesRouter);

const painRouter = require("./Routes/pain");
app.use("/pain", painRouter);


app.listen(3001, ()=>console.log("Server started"));
