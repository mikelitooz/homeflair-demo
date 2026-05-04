const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /Yorkshire Home Interiors Ltd/g, replacement: "Derbyshire Suite Centre" },
  { regex: /Yorkshire Home Interiors/g, replacement: "Derbyshire Suite Centre" },
  { regex: /Yorkshire/g, replacement: "Derbyshire" },
  { regex: /Sheffield/g, replacement: "Chesterfield" },
  { regex: /Queens Road/g, replacement: "Derby Road" },
  { regex: /yorkshire10/g, replacement: "derbyshire10" }
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'src'), function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(({ regex, replacement }) => {
      content = content.replace(regex, replacement);
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
