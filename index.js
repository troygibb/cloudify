var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(request, response) {
	console.log('GET for /')
	response.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/node_modules/*', function(request, response) {
	console.log('success on node-modules');
	console.log('GET for JS', request.url);
	response.sendFile(path.join(__dirname + `${request.url}`));
});

app.get('/%7B%7Bresult.album.images[2].url%7D%7D', function(request, response) {
	res.sendStatus(404);
});

app.get('/*', function(request, response) {
	console.log('GET for JS', request.url);
	response.sendFile(path.join(__dirname + `/client/${request.url}`));
});

app.get('/*', (req, res) => {
	console.log(req.method, req.url);
	res.sendStatus(404);
});

app.listen(port);

console.log('Server now listening on the magical port ', port, `See http://localhost:${port}`);

module.exports = app; 