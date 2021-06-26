const run = (gen) => {
  return new Promise((resolve, reject) => {
    let g = gen();
    function _next(val) {
      try {
        var res = g.next(val);
      } catch (error) {
        return reject(error);
      }
      if (res.done) {
        return resolve(res.value);
      }
      Promise.resolve(res.value).then(
        (val) => {
          _next(val);
        },
        (err) => {
          g.throw(err);
        }
      );
    }
    _next();
  });
};
