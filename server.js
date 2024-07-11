const { readFileSync } = require("fs");
const { createServer } = require("http");
const { parse } = require("url");

readFileSync(`${__dirname}/index.html`, "utf8");
const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname;

  if (pathName === "/") {
    res.end("Hello, world!");
  } else if (pathName === "/test") {
    res.end("Test page");
  } else {
    res.end("Not found");
  }
});

server.listen(8000, () => console.log("Listening for requests on port 8000"));
