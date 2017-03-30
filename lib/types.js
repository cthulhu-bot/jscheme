'use strict';

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

var sExpr = function sExpr(x) {
  return {
    type: 'sExpr',
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

var ast = function ast(x) {
  return {
    type: 'prog',
    prog: [x],
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