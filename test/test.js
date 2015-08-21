'use strict';

var test = require('tape');

test('timing test', function (t) {
  var start;

  t.plan(2);

  t.equal(typeof Date.now, 'function');
  start = Date.now();

  setTimeout(function () {
    t.equal(Date.now() - start, 100);
  }, 100);
});
