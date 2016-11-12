#!/usr/bin/env node
// coding: utf-8

function _startup() {

}

function main() {

	var express = require("express");
	var ejs_template_engine = require("ejs")
	var app = express();
	app.set('view engine', 'ejs')
	var server = app.listen(80, _startup);
	console.log("Node.js is listening to port: " + server.address().port);

	var handler_template_example1 = function(req, res, next) {
		res.render("example1.ejs", {});
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
	app.get("/example1", handler_template_example1);
}

main();
