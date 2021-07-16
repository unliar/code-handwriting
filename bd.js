const fs = require("fs");
const path = require("path");
/**
 * 把指定目录下的代码文件输出成markdown
 * @param {string} dir 文件夹
 * @param {string} title 标题
 */
const MakeDirMarkdown = (dir = "./", title = "数组") => {
  const p = path.join(__dirname, "src/code/", dir);
  console.log("资源目录:" + p + "\n");

  const fileNames = fs.readdirSync(p);
  let md = `# ${title}`;
  fileNames.forEach((name, index) => {
    const extname = path.extname(name);
    const desc = `## ${index + 1}. ${name.replace(extname, "")}`;
    const src = `<<< @/src/code/${dir}/${name}`;
    md = md + "\n\n" + desc + "\n\n" + src;
  });

  console.log("资源生成:" + p + "\n");
  const targetDir = path.join(__dirname, "src/leetcode/", dir);
  fs.mkdirSync(targetDir, { recursive: true });
  console.log("资源路径:" + targetDir + "\n");
  fs.writeFileSync(`${targetDir}/index.md`, md);
  console.log("生成完毕:" + title + "--->" + dir + "\n");
};

MakeDirMarkdown("array", "数组");

MakeDirMarkdown("binary-tree", "二叉树");

MakeDirMarkdown("number", "数字");

MakeDirMarkdown("string", "字符串");

MakeDirMarkdown("linked-list", "链表");

MakeDirMarkdown("js", "前端常见八股题");

MakeDirMarkdown("dp", "动态规划");
