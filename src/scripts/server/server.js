
'use strict';

(function() {

	var http = require('http');
	var read = require('read-file');

	var PORT = 8080;

	function handleRequest(request, response) {
		switch(request.url) {
			case '/':
				response.end(read.sync('dist/html/index.html'));
				break;
			default:
				response.end(read.sync('dist/html/error/404.html'));
				break;
		}
	}

	var server = http.createServer(handleRequest);

	server.listen(PORT, function () {
		console.log('Server listening on http://localhost:%s', PORT);
	});

}) ();