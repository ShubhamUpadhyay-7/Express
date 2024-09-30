const express = require("express");

const app = express();

const port = 3000;

//middleware
app.use(express.json());


let items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
]


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/items", (req, res) => {
    res.json(items);
})


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})
