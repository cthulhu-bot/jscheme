import * as types from './types';

const tokenizer = (rawTextInput) => {
    let current = null;
    let keywords = ' define if then else true false';
    const peek = () => {
	return current || (current = read_next());
    };
    const next = () => {
	let tok = current;
	current = null;
	return tok || read_next();
    };
//    const eof = () => {
//	return peek() === null;
    //    };

    const closingSExpr = (ch, parens) => {
	if (parens < 0) throw new Error('Unbalanced parens yo');
	if (ch === ')' && parens === 0) return true;
	return false;
    };
    
    const buildSExpr = (raw) => {
	let acc = '';
	let parens = 0;
	let func = '';
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
	const tokens = acc.split(' ');
	
	const sExp = types.sExpr(tokens[0], tokens.slice(1,tokens.length));
	console.log(sExp);
	const ast = types.ast(sExp);
	console.log('[ast] ', ast);
	return ast;
    };
    return buildSExpr(rawTextInput);
//    return {
//	next: next,
//	peek: peek,
//	eof: eof,
//	croak: input.croak,
    //    };
    const is_keyword = (x) => {
    };
    const is_digit = (ch) => {
    };
    const is_whitespace = (ch) => {
	return ' \t\n'.indexOf(ch) >= 0;
    };
    const is_comment = (ch) => {
    };
    const open_s_expr = (ch) => {
	return '('.indexOf(ch) >= 0;
    };
    const close_s_expr = (ch) => {
	return ')'.indexOf(ch) >= 0;
    };

    const read_while = (predicate) => {
	let str = '';
	while(!input.eof() && predicate(input.peek()))
	    str += input.next();
	return str;
    };
    const read_next = () => {
	read_while(is_whitespace);
	if (input.eof()) return null;
	let ch = input.peek();
	if (ch === '#') {
	    skip_comment();
	    return read_next();
	}
	input.croak('Cant read character: ' + ch);
	return null;
    };
};

module.exports = {
    tokenizer,
};
