var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var uglifyify = require('uglifyify');
var exorcist = require('exorcist');

module.exports = function watch(o) {
  return function(err) {
    var b, w;

    // Return if there was an error.
    if (err) console.error(err);

    // Bundle the JavaScript
    b = browserify(o.entryFile, { debug: true, cache: {}, packageCache: {} });

    if (o.prod) {
      b.transform(babelify);
      b.transform(uglifyify);
    } else {
      b.transform(babelify, {
        sourceMap: true,
        sourceMapRelative: process.cwd(),
      });
    }

    w = watchify(b);

    w.bundle()
      .pipe(exorcist(o.mapFile, null, null, o.outputPath))
      .pipe(fs.createWriteStream(o.outputFile, 'utf8'));

    w.on('update', function() {
      w.bundle()
        .pipe(exorcist(o.mapFile, null, null, o.outputPath))
        .pipe(fs.createWriteStream(o.outputFile, 'utf8'));
    });

    w.on('bytes', function(bytes) {
      console.log('New bundle created with ' +  bytes + ' bytes.');
    });
  };
};
