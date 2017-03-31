'use strict';

var _inputStream = require('./inputStream');

var inputStream = _interopRequireWildcard(_inputStream);

var _lexer = require('./lexer');

var tokenizer = _interopRequireWildcard(_lexer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var input = inputStream.fileRead('./test.jsc');
var tokenizedInput = tokenizer.tokenizer(input);