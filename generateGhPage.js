// npm i marked marked-gfm-heading-id

const fs = require("fs");
const { marked } = require("marked");
const { gfmHeadingId } = require("marked-gfm-heading-id");

marked.use(gfmHeadingId());

try {
  const markdown = fs.readFileSync("README.md", "utf8");
  const htmlContent = marked(markdown);
  const prepend = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Willie169.github.io</title>
<link rel="stylesheet" href="github-markdown.css">
<link rel="stylesheet" href="styles.css">
<script src="script.js" defer></script>
</head>
<body>
<script src="https://keepandroidopen.org/banner.js?hidebutton=off"></script>
<div class="navbar">
<div class="container">
<a href="https://willie169.github.io"><img src="img/willie169.jpeg" alt="Willie169" style="height: 40px;"></a>
<a href="https://willie169.github.io/Android-Non-Root"><img src="img/Android_Non_Root.png" alt="Android Non Root" style="height: 40px;"></a>
</div>
</div>
<div id="top"></div>
<article class="markdown-body">
`;
  const append = `</article>
<button id="backToTopBtn" onclick="scrollToTop()">↑ Back to Top</button>
</body>
</html>
`;
  const firstH1 = htmlContent.search(/<h1\b[^>]*>/i);
  const content = htmlContent.slice(firstH1);
  const result = prepend + content + append;
  fs.writeFileSync("output.html", result);
  console.log("HTML file has been saved as output.html");
} catch (err) {
  console.error("An error occurred:", err);
}
