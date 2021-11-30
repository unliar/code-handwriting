/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const al = a.length;
  const bl = b.length;
  const max = Math.max(al, bl);
  a = a.padStart(max, "0");

  b = b.padStart(max, "0");

  let flag = 0;
  let res = "";
  for (let i = max - 1; i >= 0; i--) {
    const xa = a[i];
    const xb = b[i];
    const v = Number(xa) + Number(xb) + Number(flag);

    if (v <= 1) {
      res = `${v}${res}`;
      flag = 0;
    }
    if (v === 2) {
      res = `0${res}`;
      flag = 1;
    }
    if (v === 3) {
      res = `1${res}`;
      flag = 1;
    }
  }
  return flag == 1 ? `1${res}` : res;
};
