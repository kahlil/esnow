'use strict';
var mkdirp = require('mkdirp');
var bundle = require('./bundle');

module.exports = function esnow(o) {
  mkdirp(o.outputPath, bundle(o));
};
