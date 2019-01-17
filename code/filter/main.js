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
		null,
		"",
		"aaa"
	];
	return list;
}

function _filter_function(e) {

	if (e == null)
		return false;
	return 0 <= e.indexOf("県");
}

function test_filter_emopty_elements() {

	// 住所リスト
	let addresses = enum_addresses();

	console.log("[TRACE] フィルタ前", addresses);

	// 関数を用いて要素をフィルタリング
	addresses = addresses.filter(_filter_function);
	// ラムダ式を用いて要素をフィルタリング
	addresses = addresses.filter(e => -1 === e.indexOf("不"));
	// 空の要素をフィルタリング
	addresses = addresses.filter(Boolean);

	console.log("[TRACE] フィルタ後", addresses);
}

function main() {

	test_filter_emopty_elements();
}

main();

