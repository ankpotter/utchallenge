var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/myaction', function(req, res) {
	var data = req.body.file +"-"+ req.body.rule;
	fs.appendFile('message.txt', '\n'+data, function (err) {

});
});	

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});