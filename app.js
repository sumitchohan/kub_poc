const http = require('http');
const url = require('url');

const port = process.env.PORT || 3000;

http.createServer(function (request, response) {
    const queryObject = url.parse(request.url, true).query;
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    var resp='';
    if(queryObject.env){
        resp+=`${resp}${queryObject.env}=${process.env[queryObject.env]}\n`;
    } 
    response.end(`Hello, World!\n${resp}`);;
    console.log(request);
}).listen(port);

console.log(`App is running... (port: ${port})`);