#!/usr/bin/env node

function main() {

	const names = {};
	names["Jimi Hendrix"] = true;
	names["Janis Joplin"] = 1;
	names["Phil Lynott"] = "truex";

	console.log(names["Jimi Hendrix"] ? true : false);
	console.log(names["Janis Joplin"] ? true : false);
	console.log(names["Phil Lynott"] ? true : false);
	console.log(names["Freddie Mercury"] ? true : false);
}

main();

