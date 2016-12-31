#!/usr/bin/env node
// coding: utf-8

function _load_json_file(path) {

	require("json");
	var fs = require("fs");
	return JSON.parse(fs.readFileSync(path, "utf8"));
}

function _main() {

	var j = _load_json_file("test.json");
	console.log(j);
}

_main();
