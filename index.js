//Node Server
var http = require('http');
http.createServer((req, res) => {
    res.write("Welcome to HTTP node Server");
    res.end();
}).listen(1234, () => console.log("HTTP Server started at port 1234"));

//Express Server
const express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send("Welcome to Express Server");
});
app.get('/sample', (req, res) => {
    res.send("Sample Express");
});
app.listen(1235, () => console.log("Expess Server started at port 1235"));