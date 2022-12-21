console.log("Implement servermu disini yak 😝!");

const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

const { PORT = 8000 } = process.env;

function getHTML(htmlFileName) {
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
    return fs.readFileSync(htmlFilePath, 'utf-8')
}

// Request response handler
function onRequest(req, res) {
    switch (req.url) {
        case "/":
            res.writeHead(200);
            res.end(getHTML("index.html"));
            return;
        case "/cars":
            res.writeHead(200);
            res.end(getHTML("cari_mobil.html"));
            return;
        default:
            const fileTypes = {
                css: "text/css",
                js: "application/javascript",
                ico: "image/x-icon",
                png: "image/png",
                jpg: "image/jpeg",
                jpeg: "image/jpeg",
                svg: "image/svg+xml",
                json: "application/json",
                map: "application/json",
                txt: "text/plain",
                ttf: "application/x-font-ttf",
                woff2: "application/font-woff2"
            };

            let pathname = url.parse(req.url, true).pathname;
            pathname = path.join(PUBLIC_DIRECTORY, pathname)

            fs.readFile(pathname, (err, file) => {
                if (err) {
                    res.status = 404;
                    res.end("404 Not Found");
                    return;
                }

                for (const [key] of Object.entries(fileTypes)) {
                    const end = `.${key}`;
                    if (req.url.endsWith(end)) {
                        res.setHeader("Content-Type", fileTypes[key]);
                        res.end(file);
                        return;
                    }
                }
            });
            return;
    }
}

// Server instance
const server = http.createServer(onRequest);

// Listen port nya
server.listen(PORT, "localhost", () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

