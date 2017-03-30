const readNext = () => {
  readWhile(isWhitespace);
  if (input.eof()) return null;
  const ch = input.peek();
  if (ch === '#') {
    skipComment();
    return readNext();
  }
  if (ch === '\"') return readString();
  if (isDigit(ch)) return readNumber();
  if (isIdStart(ch)) return readIdent();
  if (isPunc(ch)) return {
    type: "punc",
    value: input.next(),
  };
  if (isOpChar(ch)) return {
    type: "op",
    value: readWhile(isOpChar),
  };
  input.croak("Can\'t handle character: " + ch);
};
