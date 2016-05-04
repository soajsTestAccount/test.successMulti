"use strict";
var soajsCore = require("soajs");
var config = require("./config");

var daemonDriver = new soajsCore.server.daemon({"config": config});

daemonDriver.init(function () {

	daemonDriver.job('testJob', function (soajs, next) {
		var servicesConfig = soajs.servicesConfig;
		console.log('Hi');
		next();
	});

	daemonDriver.start();
});