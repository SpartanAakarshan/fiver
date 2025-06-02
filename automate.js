const fs = require('fs');
const path = require('path');

const templates = ['gym', 'bakery', 'clinic'];
const vercelConfig = `{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}`;

templates.forEach(name => {
  const src = `${name}.html`;
  const dir = path.join(__dirname, name);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  fs.renameSync(src, path.join(dir, 'index.html'));
  fs.writeFileSync(path.join(dir, 'vercel.json'), vercelConfig);
});
console.log('Folders created and files moved!'); 