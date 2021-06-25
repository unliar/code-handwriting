function PromiseAll(args = []) {
  const fullfilled = [];
  if (args.length == 0) return Promise.resolve(fullfilled);

  return new Promise((resolve, reject) => {
    args.forEach((item, index) => {
      Promise.resolve(item)
        .then((r) => {
          fullfilled[index] = r;
          if (fullfilled.length === args.length) return resolve(fullfilled);
        })
        .catch((e) => reject(e));
    });
  });
}
