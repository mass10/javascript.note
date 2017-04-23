#!/usr/bin/env node
// coding: utf-8

function _test_entry(path) {

	var fs = require("fs");
	try {
		var stat = fs.statSync(path);
		if (stat.isFile()) {
			console.log("[" + path + "] はファイルです。");
		}
		else if (stat.isDirectory()) {
			console.log("[" + path + "] はディレクトリです。");
		}
		else {
			// ???
			console.log("[" + path + "] は不明なファイルシステムです。");
		}
	}
	catch (err) {
		// console.log(err);
		console.log("[" + path + "] は不明なファイルシステムです。");
	}
}

function _main(argv) {

	if (argv.length <= 2) {
		console.log("path ?");
		return;
	}

	_test_entry(argv[2]);
}

_main(process.argv);
