'use strict';

module.exports = {
    serviceName: "sampleFailing",
    serviceGroup: "test",
    serviceVersion: 1,
    requestTimeout: 30,
    requestTimeoutRenewal: 5,
    extKeyRequired: true,
	main: 'index.js',
    type: 'service',
    prerequisites: {
        cpu: '',
        memory: ''
    },
	"awareness": true,
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