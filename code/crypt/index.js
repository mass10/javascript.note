#!/usr/bin/env nodejs
// coding: utf-8
//
//
// npm install crypto-js --save
//

// require("crypt-js");

var SHA256 = require("crypto-js/sha256");

function digest_sha256(s) {

	var hash = SHA256(s);
	console.log("[TRACE]", hash.toString());
}

function encrypt_aes(s) {

	var CryptoJS = require("crypto-js");
	const key = "special keyword to you";
	return CryptoJS.AES.encrypt(s, key).toString();
}

function decrypt_aes(s) {

	var CryptoJS = require("crypto-js");
	const key = "special keyword to you";
	return CryptoJS.AES.decrypt(s, key).toString(CryptoJS.enc.Utf8);
}

function encrypt_descrypt() {

	const xxx = encrypt_aes("清少納言");
	const yyy = decrypt_aes(xxx);
	console.log("[TRACE] xxx: [" + xxx + "], source: [" + yyy + "]");
}

function main() {

	digest_sha256("文字列");
	encrypt_descrypt();
}

main()

