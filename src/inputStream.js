const InputStream = (input) => {
  var pos = 0, line = 1, col = 0;
  return {
    next: next,
    peek: peek,
    eof: eof,
    croak: croak,
  };
  const next = () => {
    const ch = input.charAt(pos++);
    if (ch === '\n') line++, col = 0; else col++;
    return ch;
  };
  const peek = () => {
    return input.charAt(pos);
  };
  const eof = () => {
    return peek() === '';
  };
  const croak = (msg) => {
    throw new Error(`${msg} (${line}:${col})`);
  };
};

const foo = () => {
  console.log('foo');
};

module.exports = {
  foo
};
