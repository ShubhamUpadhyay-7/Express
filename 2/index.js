const http = require("http");
const greet = require("./greet");
const getCurrentDate = require("./date");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/plain" });
    const message = `${greet("World")} Today is ${getCurrentDate()}`;
    res.end(message);
})

const port = 3000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});