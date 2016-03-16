var express = require('express');
var app = express();

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile('/Users/aranjan2/Desktop/UT\ Challenge/index.html');
});

app.listen(8000);