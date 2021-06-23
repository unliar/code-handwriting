const ParseQuery = (str) => {
  const obj = {};
  str.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => {
    obj[k] = v;
  });
  return obj;
};

const ParseURL = (url) => {
  const dom = document.createElement("a");
  dom.href = url;
};
