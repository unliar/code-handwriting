/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  const ip4 = IP.split(".");
  const ip6 = IP.split(":");
  if (ip4.length == 4) {
    const isip4 = ip4.every((item) => {
      if (!item) return false;
      // 全是数字
      if (!item.match(/^[0-9]*$/)) return false;
      // 0 只有一个
      if (item.startsWith("0") && item.length == 1) {
        return true;
      } else {
        return +item >= 0 && +item <= 255;
      } // 0 - 255
    });
    if (isip4) return "IPv4";
  }

  if (ip6.length == 8) {
    if (ip6.every((item) => item.match(/^[0-9a-fA-F]{1,4}$/))) {
      return "IPv6";
    }
  }

  return "Neither";
};

console.log(validIPAddress("1.0.1."));
