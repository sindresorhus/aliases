'use strict';
const parseHelp = require('parse-help');

module.exports = (input, extras) => Object.assign(parseHelp(input).aliases, extras);
