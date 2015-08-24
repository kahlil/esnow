'use strict';

var test = require('tape');
var spawn = require('child_process').spawn;
var testCompile = spawn('npm', ['run', 'test-compile']);

testCompile.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

testCompile.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

testCompile.on('close', function (code) {
  console.log('child process exited with code ' + code);
});

// test('timing test', function (t) {
//   var start;
//
//   t.plan(2);
//
//   t.equal(typeof Date.now, 'function');
//   start = Date.now();
//
//   setTimeout(function () {
//     t.equal(Date.now() - start, 100);
//   }, 100);
// });
