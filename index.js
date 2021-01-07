const http = require('http');
http.createServer(function(req, res) {
    res.write('<h1>Elastic Beanstalk</h1>');
    res.end();
}).listen(3000);