module.exports = class FileSizeWebpackPlugin {
  constructor(options) {
    // webpack 中配置的 options 对象
    this.options = options;
  }
  // apply函数 帮助插件注册，接收complier类
  apply(complier) {
    // 异步的钩子
    complier.hooks.emit.tapAsync("FileSizeWebpackPlugin", (compilation, cb) => {
      // 打包后 dist 目录下的文件资源都放在 assets 对象中
      const assets = compilation.assets;
      const obj = {};
      Object.keys(assets).forEach((item) => {
        // 文件的大小
        let size = assets[item].size();
        obj[item] = (size / 1024).toFixed(2) + "kb";
      });

      let json = JSON.stringify(obj);

      const name = (this.options && this.options.name) || "fileSize";
      // 添加自定义输出文件
      compilation.assets[`${name}.json`] = {
        source: function() {
          return json;
        },
        size: function() {
          // 定义文件的体积
          return Buffer.byteLength(json, "utf8");
        },
      };
      // 注意，异步钩子中 callback 函数必须要调用
      cb();
    });
  }
};
