const { exec } = require('child_process');

const folders = ['gym', 'bakery', 'clinic'];
folders.forEach(folder => {
  const port = folder === 'gym' ? 8081 : folder === 'bakery' ? 8082 : 8083;
  exec(`npx http-server ${folder} -p ${port}`, (err, stdout, stderr) => {
    if (err) console.error(stderr);
    else console.log(`${folder} running at http://localhost:${port}`);
  });
}); 