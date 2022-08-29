
const http = require('http');


http.createServer( (request, response) => {

  //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  //res.writeHead(200, {'Content-Type' : 'text/plain'});

  response.write('Hola Mundo');
  response.end();

})
.listen( 9090 );

console.log('Escchando en el puerto 9090');