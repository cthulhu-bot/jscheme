const Right = x =>
        ({
          chain: f => f(x),
          map: f => Right(f(x)),
          fold: (f, g) => g(x),
          inspect: () => `Right(${x})`,
        });
const Left = x =>
        ({
          chain: f => Left(x),
          map: f => Left(x),
          fold: (f, g) => f(x),
          inspect: () => `Left(${x})`,
        });

const bool = x =>
        ({
          type: 'bool',
          value: x,
          chain: f => f,
          map: f => f,
          fold: f => f,
          inspect: f => f,
        });

const num = x =>
        ({
          type: 'num',
          value: x,
          chain: f => f,
          map: f => f,
          fold: f => f,
          inspect: f => f,
        });
 
const sExpr = (func, args) => {
        return {
            type: 'sExpr',
	    func: func,
	    args: args,
            chain: f => f,
            map: f => sExpr(f(x)),
            fold: f => f(x),
            inspect: () => `sExpr(${func}:${args})`,
        };
};

const rExpr = x =>
      ({
	  type: 'rExpr',
	  value: x,
	  chain: f => f,
	  map: f => f,
	  fold: f => f,
	  inspect: f => f,
      });

const astNode = (left, right) => {
    let r = right;
    if (typeof right === 'object' && r.length > 0) {
	r = astNode(right[0], right.slice(1, right.length));
    } else if (r.length === 0) {
	r = null;
    }
    return {
	left: left,
	right: r,
    };
};

const ast = sExpr => {
    const funcNode = astNode(sExpr.func, sExpr.args);
    console.log('[funcNode] ', funcNode);
    return funcNode;
};

const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`,
});

const fileInputType = input => {
    let pos = 0, line = 1, col = 0;
      return {
	  next: () => {
	      let ch = input.charAt(pos++);
	      if (ch === '\n') line++, col = 0; else col++;
	      return ch;
	  },
	  peek: () => {
	      return input.charAt(pos);
	  },
	  eof: () => {
	      return input.charAt(pos) === '';
	  },
	  croak: (msg) => {
	      throw new Error(`${msg} (${line}:${col})`);
	  }
      };
};

const fromNullable = x =>
      x === null ? Left(null) : Right(x);

module.exports = {
    fileInputType,
    Box,
    sExpr,
    ast,
};
