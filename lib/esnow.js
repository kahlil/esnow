'use strict';
var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');
var uglifyify = require('uglifyify');
var exorcist = require('exorcist');
var mkdirp = require('mkdirp');

module.exports = function (o) {
  mkdirp(o.outputPath, bundleJs);

  function bundleJs (err) {
    var b;

    // Return if ther was an error.
    if (err) console.error(err);

    // Bundle the JavaScript
    b = browserify(o.entryFile, { debug: true });

    if (o.prod) {
      b.transform(babelify);
      b.transform(uglifyify);
    } else {
      b.transform(babelify, {
        sourceMap: true,
        sourceMapRelative: process.cwd()
      });
    }

    b.bundle()
      .pipe(exorcist(o.mapFile, null, null, o.outputPath))
      .pipe(fs.createWriteStream(o.outputFile, 'utf8'));
  }
};
