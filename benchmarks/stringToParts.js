'use strict';

const stringToParts = require('../lib/stringToParts.js').stringToParts;
const Bench = require('benchmark');

new Bench.Suite('stringToParts')
  .add('stringToParts("first")', function() {
    stringToParts('first');
  })
  .add('stringToParts("first.second")', function() {
    stringToParts('first.second');
  })
  .add('stringToParts("first.second.third.1.name")', function() {
    stringToParts('first.second.third.1.name');
  })
  .add('stringToParts("comments")', function() {
    stringToParts('comments');
  })
  .add('stringToParts("comments.1")', function() {
    stringToParts('comments.1');
  })
  .add('stringToParts("comments.2.name")', function() {
    stringToParts('comments.2.name');
  })
  .add('stringToParts("comments.2.comments.1.comments.0.val")', function() {
    stringToParts('comments.2.comments.1.comments.0.val');
  })
  .add('stringToParts("comments.name")', function() {
    stringToParts('comments.name');
  })
  .add('stringToParts("foo[1mystring]")', function() {
    stringToParts('foo[1mystring]');
  })
  .add('stringToParts("foo[1mystring].bar[1]")', function() {
    stringToParts('foo[1mystring].bar[1]');
  })
  .add('stringToParts("foo[1mystring][2]")', function() {
    stringToParts('foo[1mystring][2]');
  })
  .on('cycle', function(e) {
    const s = String(e.target);
    console.log(s);
  })
  .run();