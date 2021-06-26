const isPrime = (x) => {
  for (let index = 2; index * index < x; ++index) {
    if (x % index == 0) return false;
  }
  return true;
};
console.log(isPrime(67));
