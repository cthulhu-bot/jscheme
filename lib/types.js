'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Right = function Right(x) {
    return {
        chain: function chain(f) {
            return f(x);
        },
        map: function map(f) {
            return Right(f(x));
        },
        fold: function fold(f, g) {
            return g(x);
        },
        inspect: function inspect() {
            return 'Right(' + x + ')';
        }
    };
};
var Left = function Left(x) {
    return {
        chain: function chain(f) {
            return Left(x);
        },
        map: function map(f) {
            return Left(x);
        },
        fold: function fold(f, g) {
            return f(x);
        },
        inspect: function inspect() {
            return 'Left(' + x + ')';
        }
    };
};

var bool = function bool(x) {
    return {
        type: 'bool',
        value: x,
        chain: function chain(f) {
            return f;
        },
        map: function map(f) {
            return f;
        },
        fold: function fold(f) {
            return f;
        },
        inspect: function inspect(f) {
            return f;
        }
    };
};

var num = function num(x) {
    return {
        type: 'num',
        value: x,
        chain: function chain(f) {
            return f;
        },
        map: function map(f) {
            return f;
        },
        fold: function fold(f) {
            return f;
        },
        inspect: function inspect(f) {
            return f;
        }
    };
};

var sExpr = function sExpr(func, args) {
    return {
        type: 'sExpr',
        func: func,
        args: args,
        chain: function chain(f) {
            return f;
        },
        map: function map(f) {
            return sExpr(f(x));
        },
        fold: function fold(f) {
            return f(x);
        },
        inspect: function inspect() {
            return 'sExpr(' + func + ':' + args + ')';
        }
    };
};

var rExpr = function rExpr(x) {
    return {
        type: 'rExpr',
        value: x,
        chain: function chain(f) {
            return f;
        },
        map: function map(f) {
            return f;
        },
        fold: function fold(f) {
            return f;
        },
        inspect: function inspect(f) {
            return f;
        }
    };
};

var astNode = function astNode(left, right) {
    var r = right;
    if ((typeof right === 'undefined' ? 'undefined' : _typeof(right)) === 'object' && r.length > 0) {
        r = astNode(right[0], right.slice(1, right.length));
    } else if (r.length === 0) {
        r = null;
    }
    return {
        left: left,
        right: r
    };
};

var ast = function ast(sExpr) {
    var funcNode = astNode(sExpr.func, sExpr.args);
    console.log('[funcNode] ', funcNode);
    return funcNode;
};

var Box = function Box(x) {
    return {
        map: function map(f) {
            return Box(f(x));
        },
        fold: function fold(f) {
            return f(x);
        },
        inspect: function inspect() {
            return 'Box(' + x + ')';
        }
    };
};

var fileInputType = function fileInputType(input) {
    var pos = 0,
        line = 1,
        col = 0;
    return {
        next: function next() {
            var ch = input.charAt(pos++);
            if (ch === '\n') line++, col = 0;else col++;
            return ch;
        },
        peek: function peek() {
            return input.charAt(pos);
        },
        eof: function eof() {
            return input.charAt(pos) === '';
        },
        croak: function croak(msg) {
            throw new Error(msg + ' (' + line + ':' + col + ')');
        }
    };
};

var fromNullable = function fromNullable(x) {
    return x === null ? Left(null) : Right(x);
};

module.exports = {
    fileInputType: fileInputType,
    Box: Box,
    sExpr: sExpr,
    ast: ast
};