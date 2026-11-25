
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(data);
        });
    }

    else if (req.url == "/patients") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        res.end("Patient List: Amit, Riya, Rahul");
    }

    else if (req.url == "/about") {
        res.end("Hospital Patient Management System");
    }

    else {
        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
