//server creation

// 1. http module

const http = require('http');
const fs = require('fs');

// 2 create server 

const server = http.createServer((req, res) => {
    console.log('request has been made from browser to server');
    //     console.log(req.method);
    //     console.log(req.url);


    // response
    res.setHeader('content-type', 'text/html');
    //content type set hua
    // res.write('<h1> Hello ,learning backend ! :) </h1>');
    // res.write('<h2> How you doing ? :) </h2>');
    // res.end();

});

//port number, host , callback func
server.listen(3000, 'localhost', () => {
    console.log('server is listening on port 3000');
}); 