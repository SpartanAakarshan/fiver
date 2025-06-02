const { exec } = require('child_process');

const folders = ['gym', 'bakery', 'clinic'];
folders.forEach(folder => {
  exec(`cd ${folder} && vercel --prod --yes`, (err, stdout, stderr) => {
    if (err) console.error(stderr);
    else console.log(`${folder} deployed successfully!`);
  });
}); 