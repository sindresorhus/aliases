'use strict';
var objectAssign = require('object-assign');
var parseHelp = require('parse-help');

module.exports = function (str, extras) {
	return objectAssign(parseHelp(str).aliases, extras);
};
