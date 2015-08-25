var mkdirp = require('mkdirp');
var bundle = require('./bundle');
var watch = require('./watch');

module.exports = function esnow(o) {
  var cb;

  if (o.watch) {
    cb = bundle(o);
  } else {
    cb = watch(o);
  }

  mkdirp(o.outputPath, cb);
};
