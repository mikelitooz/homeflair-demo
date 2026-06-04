const fs = require('fs');
const path = require('path');

const replacements = [
  // 1. Business name & domains
  { regex: /Homeflair/g, replacement: "Mr Slators Furnishings" },
  { regex: /homeflair-demo\.vercel\.app/g, replacement: "mrslators-demo.vercel.app" },
  { regex: /homeflair10/g, replacement: "slators10" },
  { regex: /sales@homeflair\.com/g, replacement: "sales@mrslators.co.uk" },
  { regex: /homeflair\.com/g, replacement: "mrslators.co.uk" },

  // 2. City / Location / Address
  { regex: /Parkgate Complex, Rawmarsh Rd, Rotherham S60 1RZ/g, replacement: "110-124 Infirmary Road, Sheffield S6 3DG" },
  { regex: /Rotherham/g, replacement: "Sheffield" },
  { regex: /Parkgate/g, replacement: "Infirmary Road" },
  { regex: /Rawmarsh Rd/g, replacement: "Infirmary Road" },
  { regex: /Rawmarsh/g, replacement: "Infirmary Road" },

  // 3. Est Year & Duration
  { regex: /since 1972/g, replacement: "since 1970" },
  { regex: /Since 1972/g, replacement: "Since 1970" },
  { regex: /1972/g, replacement: "1970" },

  // 4. Products / Category Phrases
  { regex: /fabric sofas, leather suites, rattan garden furniture and ex-display deals/g, replacement: "beds, mattresses, suites, solid pine furniture, and fitted carpets" },
  { regex: /fabric sofas, leather suites, garden furniture and more/g, replacement: "beds, suites, pine furniture, carpets, and more" },
  { regex: /fabric sofas, leather suites and garden furniture/g, replacement: "beds, suites, pine furniture, and carpets" },
  { regex: /sofas, leather suites, and rattan garden furniture/g, replacement: "beds, suites, solid pine furniture, and carpets" },
  { regex: /sofas, leather suites and exclusive rattan garden furniture/g, replacement: "beds, suites, solid pine furniture and carpets" },
  { regex: /sofas, leather suites and garden furniture/g, replacement: "beds, suites, solid pine furniture and carpets" },
  { regex: /sofas, leather suites, garden furniture and ex-display deals/g, replacement: "beds, suites, solid pine furniture, carpets and occasional items" },
  { regex: /sofas, recliners, dining sets, beds, wardrobes, coffee tables, living room furniture and decor/g, replacement: "sleigh beds, suites, high-seat armchairs, pine wardrobes, and fitted carpets" },
  { regex: /Interior design, consultation, space planning, delivery, home styling and custom furniture advice/g, replacement: "Quality furniture delivery, custom bed assembly, carpet measuring, and home styling advice" }
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

console.log('Replacements completed successfully!');
