#!/usr/bin/env node

// パラメータは単一の値、もしくは参照です。
const test1 = (param) => {

	console.log("[TRACE] <test1>", param);
}

// パラメータはディクショナリオブジェクトのキーに対応する値
// {
//	   param1: "値1",
//	   param2: "値2", ★
//	   param3: "値3"
// }
const test2 = ({param2}) => {

	console.log("[TRACE] <test2>", param2);
}

// パラメータはディクショナリオブジェクトのキーに対応する値
// {
//	   param1: "値1",
//	   param2: "値2",
//	   param3: "値3"
// }
function test3({ undefined_key }) {

	console.log("[TRACE] <test3>", undefined_key);
}

function main() {

	test1("★");
	test2({ param1: "aaa", param2: "★", param3: "ccc" });
	test3({ param1: "aaa", param2: "bbb", param3: "ccc" });
}

main();
