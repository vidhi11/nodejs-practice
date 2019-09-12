const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Helloooooooooooo World.....");
  res.end();
});
server.listen(8080);
