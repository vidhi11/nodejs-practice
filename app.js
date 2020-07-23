const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Helloooooooooooo World.....ROKS application");
  res.end();
});
server.listen(4444);
