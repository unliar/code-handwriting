const Parse = (str) => {
  const obj = {};
  str.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => {
    obj[k] = v;
  });
  return obj;
};

console.log(Parse("?a=1&c=2"));
