const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

const handleError = (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Retrying in 1 second...`);
    setTimeout(startServer, 1000);
  } else {
    console.error(`Failed to start server: ${err}`);
  }
};

startServer().catch(handleError);