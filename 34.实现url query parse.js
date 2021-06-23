const ParseQuery = (str) => {
  const obj = {};
  str.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => {
    obj[k] = v;
  });
  return obj;
};
