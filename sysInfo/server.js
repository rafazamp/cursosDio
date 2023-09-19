const stats = require('./pcRamUsage');
const http = require('http');

HOST = 'http://localhost:';
PORT = 3000;

http.createServer((req, res) => {
  let url = req.url;

  if (url === "/") {
    res.end("Veja os status do pc em /stats");
  }
  else if (url === "/stats") {
    res.end(JSON.stringify(stats, null, 2));
  }
}).listen(PORT, () => {
  console.log(`Listening on ${HOST}${PORT}`);
});