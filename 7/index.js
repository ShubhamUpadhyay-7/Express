const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const url = "mongodb+srv://shubhamupadhya8299:lN2awH5BPFW9Pwgy@mydb.7l8ng.mongodb.net/?retryWrites=true&w=majority&appName=MyDB";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => { console.log("Connected to mongodb DataBase") }).
    catch((err) => { console.error("Connection Error", err) });

const userSchema = new mongoose.Schema({
    id: {
        type: String, required: true, unique: true
    },
    name: String,
    age: Number
})

const User = mongoose.model("User", userSchema);

app.use(express.json());

//API

//POST - Method - Create
app.post("/users", async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})


//GET

app.get("/users", async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

app.put("/users/:id", (async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}))
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});