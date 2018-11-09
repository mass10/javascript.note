#!/usr/bin/env node
// coding: utf-8

function enum_addresses() {

	const list = [
		"東京都千代田区大手町1-1",
		"東京都中野区中央2-15-1",
		"山形県本庄市野口2-1",
		"沖縄県那覇市辻2-3"
	];
	return list;
}

function _filter_function(e) {
	return 0 <= e.indexOf("沖縄県");
}

function main() {

	const addresses = enum_addresses();
	const filtered_addresses = addresses.filter(_filter_function)
	console.log(filtered_addresses);
}

main();
