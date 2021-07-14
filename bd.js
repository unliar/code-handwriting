const fs = require("fs");
const path = require("path");
const GetAllFileName = (dir = "./", title = "数组") => {
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
};

GetAllFileName("array", "数组");

GetAllFileName("binary-tree", "二叉树");

GetAllFileName("number", "数字");

GetAllFileName("string", "字符串");

GetAllFileName("linked-list", "链表");
