#!/usr/bin/env node
// coding: utf-8

function task(id) {

	this._id = id;

	this.run = function() {
		console.log("<" + this._id + "> ### start ###");
		console.log("<" + this._id + "> --- end ---");
	}.bind(this);
};

function _main() {

	new task("45189f5a-9546-4509-b773-036286429664").run();
	new task("162e266e-9f72-4bfc-9246-a74b0f23eef2").run();
	new task("a443ea73-5db2-47f7-841e-d3eec9c7f14c").run();
}

_main();

