const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Shubham:ozmcVSwVXdSYcv9s@cluster0.zh57b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log("MongoDB Connected")).catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});