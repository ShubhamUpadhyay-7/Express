const http = require("http");
const greet = require("./greet");
const getCurrentDate = require("./date");
const fs = require("fs");

//reading a file
fs.readFile("example.txt", "utf-8", (err, data) => {
    if (err) {
        console.err("Error reading the file:", err);
        return;
    }
    console.log("File Content:", data);
})

//writing a file
fs.writeFile("output.txt", "This is the file content.", (err) => {
    if (err) {
        console.error("Error writing to the file", err);
        return;
    }
    console.log("File written successfully!");
});

//writing a fileSync
try {
    fs.writeFileSync("newFile.txt", "This is the content of new file.");
    console.log("File Written Successfully.");
} catch (error) {
    console.error("Error writing to the file", error);
}


//append a file
fs.appendFile("output.txt", "\n appended content using append method in Node JS under fs module.", (error) => {
    if (error) {
        console.error("Error appending to the file:", error);
        return;
    }
    console.log("Content has been appended successfully.");
});

//


const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/plain" });
    const message = `${greet("World")} Today is ${getCurrentDate()}`;
    res.end(message);
})

const port = 3000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});