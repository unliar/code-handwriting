/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import { GetMarkDownIndex } from "./uitils";
export default (ctx) => {
  // ...apply enhancements for the site.
  console.log(ctx);
  // ...
  if (ctx.isServer) {
    GetMarkDownIndex(ctx.siteData);
  }
};
