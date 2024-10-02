const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.render("index", { title: "Home Page", message: "Welcome to Node.js with EJS" })
});

app.get("/users", (req, res) => {
    const users = [
        { name: "Shubham", age: 24 },
        { name: "Shivam", age: 22 },
        { name: "Rohan", age: 20 }
    ]
    res.render("users", { users });
})