#!/usr/bin/env node
// coding: utf-8

function _startup() {

}

function main() {

	var express = require("express");
	var app = express();
	app.set('view engine', 'pug');
	var server = app.listen(80, _startup);
	console.log("Node.js is listening to port: " + server.address().port);

	var handler_template_example0 = function(req, res, next) {
		content = {title: 'Hey', message: 'Hello there!'}
		res.render('index', content)
	};

	var handler_simple_json = function(req, res, next) {
		var result = {
			status: "OK",
			message_text: "Hello",
			timestamp: new Date()
		};
		res.json(result);
	};

	app.get("/hello", handler_simple_json);
	app.get("/example0", handler_template_example0);
}

main();
