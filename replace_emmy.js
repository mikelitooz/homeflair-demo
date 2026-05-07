const fs = require('fs');
const path = require('path');

const replacements = [
  // Previous brand names
  { regex: /Right Price Carpets/g, replacement: "Emmy's Shop" },
  { regex: /Right Price/g, replacement: "Emmy's" },
  { regex: /RPC/g, replacement: "Emmy" },
  { regex: /K\.E\.S\. Bathrooms/g, replacement: "Emmy's Shop" },
  { regex: /K\.E\.S\./g, replacement: "Emmy's" },
  // Locations
  { regex: /Clay Cross/g, replacement: "Sheffield" },
  { regex: /Middlesbrough/g, replacement: "Sheffield" },
  { regex: /87 High St, Sheffield, Chesterfield, S45 9DZ/g, replacement: "3 Stubbin Ln, Sheffield S5 6QG" },
  { regex: /87 High St, Sheffield, Chesterfield S45 9DZ/g, replacement: "3 Stubbin Ln, Sheffield S5 6QG" },
  { regex: /High St/g, replacement: "Stubbin Lane" },
  // Products context (if remaining from flooring)
  { regex: /carpets, laminate, LVT and vinyl/g, replacement: "sofas, beds, dining sets and decor" },
  { regex: /carpets, laminate, LVT, vinyl and artificial grass/g, replacement: "boutique furniture, sofas, beds, and home styling" },
  { regex: /Quality carpets, laminate, LVT flooring and artificial grass/g, replacement: "Handpicked sofas, beds, dining sets and home decor" },
  { regex: /Quality carpets, laminate, LVT and flooring/g, replacement: "Handpicked furniture and home styling" },
  { regex: /flooring showroom/g, replacement: "furniture boutique" },
  { regex: /flooring specialist/g, replacement: "furniture boutique" },
  { regex: /Carpets & Flooring/g, replacement: "Boutique Furniture" },
  { regex: /Quality Carpets & Flooring/g, replacement: "Beautiful Boutique Furniture" },
  { regex: /Floor your whole home for less/g, replacement: "Furnish your whole home with style" },
  { regex: /Shop all flooring/g, replacement: "Shop all furniture" },
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

console.log('Done replacing text!');
