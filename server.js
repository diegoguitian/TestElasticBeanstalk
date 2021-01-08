const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;

app.get('/', function(req, res) {
    res.send('<h1>TestElasticBeanstal</h1>')
});

app.listen(PORT);;