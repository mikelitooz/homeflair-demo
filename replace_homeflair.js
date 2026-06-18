const fs = require('fs');
const path = require('path');

const replacements = [
  // 1. Business name & domains
  { regex: /Mr Slators Furnishings/g, replacement: "Homeflair" },
  { regex: /Slators Furniture/g, replacement: "Homeflair" },
  { regex: /Slators/g, replacement: "Homeflair" },
  { regex: /mrslators-demo\.vercel\.app/g, replacement: "homeflair-demo.vercel.app" },
  { regex: /slators10/g, replacement: "homeflair10" },
  { regex: /sales@mrslators\.co\.uk/g, replacement: "sales@homeflair.com" },
  { regex: /mrslators\.co\.uk/g, replacement: "homeflair.com" },

  // 2. City / Location / Address / Phone
  { regex: /110-124 Infirmary Road, Sheffield S6 3DG/g, replacement: "Parkgate Complex, Rawmarsh Rd, Rotherham S60 1RZ" },
  { regex: /Sheffield/g, replacement: "Rotherham" },
  { regex: /Infirmary Road/g, replacement: "Parkgate" },
  { regex: /0114 276 5940/g, replacement: "01709 376633" },

  // 3. Est Year & Duration
  { regex: /since 1970/g, replacement: "since 1972" },
  { regex: /Since 1970/g, replacement: "Since 1972" },
  { regex: /1970/g, replacement: "1972" },

  // 4. Products / Category Phrases
  { regex: /beds, mattresses, suites, solid pine furniture, and fitted carpets/g, replacement: "fabric sofas, leather suites, rattan garden furniture and ex-display deals" },
  { regex: /beds, suites, pine furniture, carpets, and more/g, replacement: "fabric sofas, leather suites, garden furniture and more" },
  { regex: /beds, suites, pine furniture, and carpets/g, replacement: "fabric sofas, leather suites and garden furniture" },
  { regex: /beds, suites, solid pine furniture, and carpets/g, replacement: "sofas, leather suites, and rattan garden furniture" },
  { regex: /beds, suites, solid pine furniture and carpets/g, replacement: "sofas, leather suites and garden furniture" },
  { regex: /beds, suites, solid pine furniture, carpets and occasional items/g, replacement: "sofas, leather suites, garden furniture and ex-display deals" },
  { regex: /sleigh beds, suites, high-seat armchairs, pine wardrobes, and fitted carpets/g, replacement: "sofas, recliners, dining sets, beds, wardrobes, coffee tables, living room furniture and decor" },
  { regex: /Quality furniture delivery, custom bed assembly, carpet measuring, and home styling advice/g, replacement: "Interior design, consultation, space planning, delivery, home styling and custom furniture advice" }
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
