'use strict';

var test = require('tape');
var spawn = require('child_process').spawn;
var isThere = require('is-there');
var testCompile = spawn('npm', ['run', 'test-compile']);

var paths = ['test/fixtures/out/app.js', 'test/fixtures/out/app.js.map'];

test('should generate app.js and app.js.map', function(t) {
  t.plan(2);

  testCompile.on('close', function(code) {
    paths.forEach(function(p) {
      t.equal(isThere(p), true);
    });
  });
});
