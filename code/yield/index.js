#!/usr/bin/env node
// coding: utf-8

function* enum_values() {

	yield [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

function main() {

	for (let e of enum_values()) {
		console.log("[", e, "]");
	}
}

main();

