'use strict';

var _types = require('./types');

var types = _interopRequireWildcard(_types);

var _escodegen = require('escodegen');

var codegen = _interopRequireWildcard(_escodegen);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tokenizer = function tokenizer(rawTextInput) {
			var current = null;
			var keywords = ' define if then else true false';
			var peek = function peek() {
						return current || (current = read_next());
			};
			var next = function next() {
						var tok = current;
						current = null;
						return tok || read_next();
			};
			//    const eof = () => {
			//	return peek() === null;
			//    };

			var closingSExpr = function closingSExpr(ch, parens) {
						if (parens < 0) throw new Error('Unbalanced parens yo');
						if (ch === ')' && parens === 0) return true;
						return false;
			};

			var buildSExpr = function buildSExpr(raw) {
						var acc = '';
						var parens = 0;
						var func = '';
						if (!raw.peek() === '(') {
									return null;
						} else {
									raw.next();
						}

						while (!raw.eof() && !closingSExpr(raw.peek(), parens)) {
									if (raw.peek() === '(') {
												parens++;
									} else if (raw.peek() === ')') {
												parens--;
									}
									acc = acc.concat(raw.next());
						}
						var tokens = acc.split(' ');

						var sExp = types.sExpr(tokens[0], tokens.slice(1, tokens.length));
						console.log(sExp);
						var ast = types.ast(sExp);
						console.log('[ast] ', ast);
						//    const astNode = types.sExpr->astNode(sExpr);
						console.log('[codegen] ', codegen.generate(ast));
						return ast;
			};
			return buildSExpr(rawTextInput);
			//    return {
			//	next: next,
			//	peek: peek,
			//	eof: eof,
			//	croak: input.croak,
			//    };
			var is_keyword = function is_keyword(x) {};
			var is_digit = function is_digit(ch) {};
			var is_whitespace = function is_whitespace(ch) {
						return ' \t\n'.indexOf(ch) >= 0;
			};
			var is_comment = function is_comment(ch) {};
			var open_s_expr = function open_s_expr(ch) {
						return '('.indexOf(ch) >= 0;
			};
			var close_s_expr = function close_s_expr(ch) {
						return ')'.indexOf(ch) >= 0;
			};

			var read_while = function read_while(predicate) {
						var str = '';
						while (!input.eof() && predicate(input.peek())) {
									str += input.next();
						}return str;
			};
			var read_next = function read_next() {
						read_while(is_whitespace);
						if (input.eof()) return null;
						var ch = input.peek();
						if (ch === '#') {
									skip_comment();
									return read_next();
						}
						input.croak('Cant read character: ' + ch);
						return null;
			};
};

module.exports = {
			tokenizer: tokenizer
};