var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var uglifyify = require('uglifyify');
var exorcist = require('exorcist');

module.exports = function(o) {
  return function(err) {
    var b, w;
    var options = { debug: true };

    // Return if there was an error.
    if (err) {
      console.error(err);
      process.exit(1);
    }

    if (o.watch) {
      options.cache = {};
      options.packageCache = {};
    }

    // Bundle the JavaScript
    b = browserify(o.entryFile, options);

    if (o.prod) {
      b.transform(babelify);
      b.transform({ global: true }, uglifyify);
    } else {
      b.transform(babelify, {
        sourceMap: true,
        sourceMapRelative: process.cwd(),
      });
    }

    function bundleUp(bundler) {
      bundler
        .bundle()
        .pipe(exorcist(o.mapFile, null, null, o.outputPath))
        .pipe(fs.createWriteStream(o.outputFile, 'utf8'));
    }

    if (o.watch) {
      w = watchify(b);

      bundleUp(w);

      w.on('update', function() { bundleUp(w); });
      w.on('log', function(msg) { console.log(msg); });
    } else {
      bundleUp(b);
    }
  };
};
