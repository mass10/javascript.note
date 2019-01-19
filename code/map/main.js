#!/usr/bin/env node
// coding: utf-8

function enum_addresses() {

	const list = [
		"東京都千代田区大手町1-1",
		"東京都中野区中央2-15-1",
		"山形県本庄市野口2-1",
		"徳島県徳島市幸町2丁目5番地",
		"山梨県南巨摩郡早川町",
		"沖縄県那覇市辻2-3",
		"不正なデータ",
		"不明な住所",
		"不適切な住所",
		"",
		"aaa"
	];
	return list;
}

function test_filter(addresses, filter) {

	console.log('[TRACE] 住所リストを "' + filter + '" で map() した結果', addresses.map(e => 0 <= e.indexOf(filter)))
}

function test_filter_emopty_elements() {

	// 住所リスト
	let addresses = enum_addresses();

	test_filter(addresses, "2");
}

function main() {

	test_filter_emopty_elements();
}

main();

