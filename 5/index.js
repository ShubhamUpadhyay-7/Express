const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

//In memory database
const items = [
    {
        id: 1,
        name: "Item 1"

    },
    {
        id: 2,
        name: "Item 2"

    },
    {
        id: 3,
        name: "Item 3"

    }
];

// Route 1: CREATE - Add a new item (POST request)
app.post("/items", (req, res) => {
    const item = req.body;
    item.id = items.length + 1;
    items.push(item);
    res.status(201).json(item);
})

// Route 2: READ - Retrive the existing items(GET request)
app.get("/items", (req, res) => {
    res.json(items);
})


//Route 3

app.get("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find((i) => i.id === id)
    if (item) {
        res.json(item)
    } else {
        res.status(404).json({ message: "Item not found" })
    }
})

//Route 4

app.put("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    const index = items.findIndex((i) => i.id === id);
    if (index !== -1) {
        updatedItem.id = id;
        items[index] = updatedItem;
        res.json(updatedItem);
    } else {
        res.status(404).json({ message: "Item not found." })
    }
});


//Route 5

app.delete("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex((i) => i.id === id);
    if (index !== -1) {
        items.slice(index, 1);
        res.json({ message: "Item deleted" });
    } else {
        res.status(404).json({ message: "Item not found." })
    }
})
