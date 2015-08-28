var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var uglifyify = require('uglifyify');
var exorcist = require('exorcist');

module.exports = function bundle(o) {
  return function(err) {
    var b, w;
    var options = { debug: true };

    // Return if there was an error.
    if (err) console.error(err);

    if (o.watch) {
      options.cache = {};
      options.packageCache = {};
    }

    // Bundle the JavaScript
    b = browserify(o.entryFile, options);

    if (o.prod) {
      b.transform(babelify);
      b.transform(uglifyify);
    } else {
      b.transform(babelify, {
        sourceMap: true,
        sourceMapRelative: process.cwd(),
      });
    }

    if (o.watch) {
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
    } else {
      b.bundle()
        .pipe(exorcist(o.mapFile, null, null, o.outputPath))
        .pipe(fs.createWriteStream(o.outputFile, 'utf8'));
    }
  };
};
