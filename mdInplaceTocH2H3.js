// npm i markdown-toc

const fs = require('fs');
const toc = require('markdown-toc');

const tocStart = '<!-- TOC START -->';
const tocEnd = '<!-- TOC END -->';

fs.readFile('README.md', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading README.md:', err);
    return;
  }

  const tocContent = toc(data, {
    filter: (str, ele) => ele.lvl === 2 || ele.lvl === 3
  }).content
    .replaceAll("\n  ", "\n")
    .substring(2)
    .replaceAll("  +", "  *");

  const replacement = `${tocStart}\n${tocContent}\n${tocEnd}`;

  const updated = data.replace(
    new RegExp(`${tocStart}[\\s\\S]*?${tocEnd}`),
    replacement
  );

  fs.writeFile('README.md', updated, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing README.md:', writeErr);
    } else {
      console.log('TOC updated in README.md');
    }
  });
});
