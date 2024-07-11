const { createServer } = require("http");
const { parse } = require("path");

const server = createServer((req, res) => {
  const pathname = parse(req.url, true).pathname;

  res.end(`Hello, world!`);
});

server.listen(8000, () => console.log("Listening for requests on port 8000"));
