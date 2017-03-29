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

const num = x =>
        ({
          type: 'num',
          value: x,
          chain:
          map:
          fold:
          inspect:
        });
 
const s-expr = x =>
        ({
          type: 's-expr',
          value: x,
          chain:
          map:
          fold:
          inspect:
        });
