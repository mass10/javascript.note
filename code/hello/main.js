#!/usr/bin/env node
// coding: utf-8
//
// Node.js で Helo World
//
//
//

function handler(req, res) {
	console.log("### " + req.method + ":" + req.url + " ###");
	// console.log(req); // verbose
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}

function main() {
	var http = require('http');
	http.createServer(handler).listen(80, '0.0.0.0');
	console.log('Server running at http://0.0.0.0:80/');
}

main();



