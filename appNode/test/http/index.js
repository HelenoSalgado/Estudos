const { createServer, request } = require('http');

let server = createServer((request, response) => {

  response.writeHead(200, { "Content-Type": "text/html"});

  response.write(`
  
  <h1> Teste <h1>
  <p> Primeira página com node.js </p>`);

  response.end();

});

server.listen(8000);

console.log("Ouvindo a porta 8000");