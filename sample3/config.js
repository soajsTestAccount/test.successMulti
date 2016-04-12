'use strict';

module.exports = {
	serviceName: "sampleDaemonSuccess1",
	serviceGroup: "test",
	servicePort: 3003,
	type: 'daemon',
	prerequisites: {},
	//serviceVersion: 1,
	main: "index.js",
	errors: {},
	"cmd":["ls"],
	"schema": {
		"testJob": {
			"l": "test Job"
		}
	}
};