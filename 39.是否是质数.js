const isPrime = (x) => {
  for (let index = 2; index * index <= x; ++index) {
    if (x % index === 0) return false;
  }
  return true;
};
console.log(isPrime(4));

const PrimeList = (n) => {
  const list = [];
  for (let index = 2; index < n; index++) {
    if (isPrime(index)) {
      list.push(index);
    }
  }
  return list;
};

console.log(PrimeList(100));
