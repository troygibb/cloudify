var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(request, response) {
	console.log('GET for /')
	response.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/client/app.js', function(request, response) {
	console.log('GET', request.url);
	response.sendFile(path.join(__dirname + '/client/app.js'));
});

app.get('/*', (req, res) => {
	console.log(req.method, req.url);
	res.send(404);
});

app.listen(port);

console.log('Server now listening on the magical port ', port, `See http://localhost:${port}`);

module.exports = app; 