#!/usr/bin/env node
// coding: utf-8

function* enum_values() {

	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	yield 6;
	yield 7;
	yield 8;
	yield 9;
}

function main() {

	for (let e of enum_values()) {
		console.log("[TRACE]", e);
	}
}

main();

