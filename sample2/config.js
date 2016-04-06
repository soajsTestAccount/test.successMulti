'use strict';

module.exports = {
	type: 'service',
	serviceName: "sampleSuccess2",
	serviceGroup: "test",
	servicePort: 3002,
	requestTimeout: 30,
	requestTimeoutRenewal: 5,
	extKeyRequired: true,
	prerequisites: {},
	"errors": {
		"600": "Database error",
		"601": "Missing info"
	},
	"schema": {
		"/getInfo": {
			"_apiInfo": {
				"l": "Get Info",
				"group": "Information",
				"groupMain": true
			},
			"email": {
				"source": ['query.email'],
				"required": false,
				"validation": {
					"type": "string",
					"format": "email"
				}
			}
		}
	}
};