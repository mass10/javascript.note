#!/usr/bin/env node
// coding: utf-8

function _read_arguments() {

	const args = require('command-line-args');
	const def = [
		{name: 'help', alias: 'h', type: Boolean},
		{name: 'verbose', alias: 'v', type: Boolean},
		{name: 'src', type: String, multiple: true, defaultOption: true},
		{name: 'timeout', alias: 't', type: Number}
	];
	const options = args(def);
	return options;
}

function _main() {

	const options = _read_arguments();
	console.log(options);
}

_main();
