'use strict';

var InputStream = function InputStream(input) {
  var pos = 0,
      line = 1,
      col = 0;
  return {
    next: next,
    peek: peek,
    eof: eof,
    croak: croak
  };
  var next = function next() {
    var ch = input.charAt(pos++);
    if (ch === '\n') line++, col = 0;else col++;
    return ch;
  };
  var peek = function peek() {
    return input.charAt(pos);
  };
  var eof = function eof() {
    return peek() === '';
  };
  var croak = function croak(msg) {
    throw new Error(msg + ' (' + line + ':' + col + ')');
  };
};

var foo = function foo() {
  console.log('foo');
};

module.exports = {
  foo: foo
};