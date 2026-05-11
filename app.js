const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("Hello from NodeJS Docker Project");
    res.end();
});

server.listen(3000);
