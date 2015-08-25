var mkdirp = require('mkdirp');
var bundle = require('./bundle');
var watch = require('./watch');

module.exports = function esnow(o) {
  var cb;

  if (o.watch) {
    cb = watch(o);
  } else {
    cb = bundle(o);
  }

  mkdirp(o.outputPath, cb);
};
