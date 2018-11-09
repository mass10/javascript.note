#!/usr/bin/env node
// coding: utf-8

function enum_addresses() {
	const list = [
		"東京都千代田区大手町1-1",
		"東京都中野区中央2-15-1",
		"山形県本庄市野口2-1",
		"沖縄県那覇市辻2-3",
		null,
		"",
		"aaa"
	];
	return list;
}

function _filter_function(e) {
	return 0 <= e.indexOf("県");
}

function main() {
	let addresses = enum_addresses();
	// addresses = addresses.filter(_filter_function);
	// addresses = addresses.filter(e => 0 <= e.indexOf("市"));
	addresses = addresses.filter(Boolean);
	console.log(addresses);
}

main();
