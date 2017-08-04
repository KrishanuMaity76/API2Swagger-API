var http = require('http');
var express = require('express');
var executeApi = require('../lib/execute/api.js');
var app = express();
app.listen(4003, function() {
	console.log('Example app listening on port 3000!');
});

app.post('/v1/api2swagger/fromSpecification', function(req, res) {
	var options = {};
	options.endpoint = '';// 'https://www.googleapis.com/books/v1/volumes?q=quilting';
	options.httpMethod = '';// 'GET';
	options.data = '';
	options.headers = '';
	var body = [];
	req.on('data', function(chunk) {
		body.push(chunk);
	}).on('end', function() {
		body = Buffer.concat(body).toString();
		var input = JSON.parse(body);
		console.log(input.url);
		options.endpoint = input.url;
		options.httpMethod = input.http_method;
		options.data = input.request;
		options.responsePayload = input.response;
		options.oAUthType = input.oAUthType;
		options.makeRequest = false;
		// at this point, `body` has the entire request body stored in it as a
		// string
		executeApi.processRequest(options, function(err, reply) {
			if (err) {
				console.log('In error...' + reply);
				console.log(reply);
			} else {
				console.log('Got success response...');
				// nothing for now..
			}
		}, function(response) {
			console.log('Final Response =====> \n' + response);
			res.setHeader('Content-Type', 'application/json')
			res.status(200).send(response);
		});
	});
});

app.post('/v1/api2swagger/fromURL', function(req, res) {
	var options = {};
	options.endpoint = '';// 'https://www.googleapis.com/books/v1/volumes?q=quilting';
	options.httpMethod = '';// 'GET';
	options.data = '';
	options.headers = '';
	var body = [];
	req.on('data', function(chunk) {
		body.push(chunk);
	}).on('end', function() {
		body = Buffer.concat(body).toString();
		var input = JSON.parse(body);
		console.log(input.url);
		options.endpoint = input.url;
		options.httpMethod = input.http_method;
		options.data = input.request;
		options.oAUthType = input.oAUthType;
		options.makeRequest = true;
		// at this point, `body` has the entire request body stored in it as a
		// string
		executeApi.processRequest(options, function(err, reply) {
			if (err) {
				console.log('In error...' + reply);
				console.log(reply);
			} else {
				console.log('Got success response...');
				// nothing for now..
			}
		}, function(response) {
			console.log('Final Response =====> \n' + response);
			res.setHeader('Content-Type', 'application/json')
			res.status(200).send(response);
		});
	});
});

app.get('/api2swagger/api-response', function(req, res) {
	setTimeout(function() {
		console.log('hello world!');
		res.status(200).send('hello world!');
	}, 115000);
});
