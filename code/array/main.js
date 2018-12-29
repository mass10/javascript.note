#!/usr/bin/env nodejs
// coding: utf-8


function abs(ar) {

	const __handler = (e, index) => {
		return Math.abs(e)
	}
	const result = ar.map(__handler)
	return result
}

function main() {

	const ar = [-123, -2.98, 12, 100, 9871]

	// print all
	console.log("[TRACE]", ar)

	// referencing by invalid key (SAFE)
	console.log("[TRACE]", ar[-1])
	console.log("[TRACE]", ar["key"])

	// map iteration
	console.log("[trace]", abs(ar))
}

main();

