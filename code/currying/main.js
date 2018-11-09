#!/usr/bin/env node
// coding: utf-8

function get_writer(out) {

	return function() {

		out.log(arguments);
	}
}

function main() {

	let write = get_writer(console);

	write(new Date(), "### start ###");
	write(new Date(), "こにちは");
	write(new Date(), "--- end ---");
}

main();
