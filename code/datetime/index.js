#!/usr/bin/env node
// coding: utf-8

function get_timestamp() {

	var date = new Date();

	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	var millisec = date.getMilliseconds();

	month = (month < 10 ? "0" : "") + month;
	day = (day < 10 ? "0" : "") + day;
	hour = (hour < 10 ? "0" : "") + hour;
	min = (min < 10 ? "0" : "") + min;
	sec = (sec < 10 ? "0" : "") + sec;
	millisec = (millisec < 100 ? "00" : "") + millisec;

	return "" + date.getFullYear() + "-" + month + "-" + day + " " +  hour + ":" + min + ":" + sec + "." + millisec;
}

function main(argv) {

	console.log(get_timestamp());
}

main(process.argv)

