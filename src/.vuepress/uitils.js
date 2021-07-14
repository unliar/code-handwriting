const GetNaviBarMd = () => {
  const domList = document.querySelectorAll(
    ".sidebar-group-items .sidebar-link"
  );
  let str = "";

  domList.forEach((d) => {
    const title = d.innerHTML;
    const href = d
      .getAttribute("href")
      .replace("/code-handwriting/leetcode", ".");
    str = str + "\n\n" + `[${title}](${href})`;
  });
  console.log(str);
};
