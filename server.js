const { createServer } = require("http");

const server = createServer((req, res) => {
  res.end(`Hello, world!`);
});
