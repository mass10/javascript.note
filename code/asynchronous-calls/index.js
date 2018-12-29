#!/usr/bin/env node

async function sleep(millisec) {

	return new Promise((resolve, _) => setTimeout(() => resolve(), millisec))
}

async function long_term_operation(id) {

	console.log("[TRACE] task(" + id + ") starting...")
	await sleep(3000)
	console.log("[TRACE] task(" + id + ") end!")
}

async function main() {

	console.log("[TRACE] ### start ###")

	const p1 = long_term_operation("a")
	const p2 = long_term_operation("b")
	const p3 = long_term_operation("c")

	console.log("[TRACE] p1 is", p1)
	console.log("[TRACE] p2 is", p2)
	console.log("[TRACE] p3 is", p3)

	await p1
	await p2
	await p3

	console.log("[TRACE] --- end ---")
}

main()

