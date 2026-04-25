const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const hostname = os.hostname();
  const timestamp = new Date().toISOString();

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Hello from Node.js!',
    hostname: hostname,
    timestamp: timestamp,
    port: PORT,
  }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} | hostname: ${os.hostname()}`);
});
