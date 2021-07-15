export const happy = () => {
  const domList = document.querySelectorAll(
    ".sidebar-group-items .sidebar-link"
  );
  let str = "";

  domList.forEach((d, index) => {
    const ind = `${index + 1}.`;
    const title = d.innerHTML.replace(ind, "").trim();
    const href = d
      .getAttribute("href")
      .replace("/code-handwriting/leetcode", ".");

    str = str + "\n\n" + `### ${ind} [${title}](${href})`;
  });
  console.log(str);
};

export const GetMarkDownIndex = (meta) => {
  const pages = meta.pages
    .filter((i) => i.path != "/" && i.path != "/leetcode/")
    .sort((a, b) => a.title > b.title);
  let md = "# 目录";
  pages.forEach((item) => {
    const h1 = item.title;
    md = md + "\n\n" + `## ${h1}`;
    // 基础目录
    const basePath = item.regularPath;
    item.headers.forEach((t, index) => {
      const ind = `${index + 1}.`;
      const desc = t.title.replace(ind, "").trim();
      const title = `### ${index + 1}. [${desc}](${basePath}#${t.slug})`;
      md = md + "\n\n" + title;
    });
  });
  if (process) {
    const fs = require("fs");
    const path = require("path");
    const cwd = process.cwd();
    const dest = path.join(cwd, "/src/leetcode/");
    fs.writeFileSync(`${dest}index.md`, md, { flag: "w" });
  }
  console.log(md);
};
