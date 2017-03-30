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
 
const sExpr = x =>
        ({
          type: 'sExpr',
          value: x,
          chain: f => f,
          map: f => f,
          fold: f => f,
          inspect: f => f,
        });

const ast = x =>
        ({
          type: 'prog',
          prog: [x],
          chain: f => f,
          map: f => f,
          fold: f => f,
          inspect: f => f,
        });

