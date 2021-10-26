const fs = require('fs')
const pathResolve = require('path').resolve

const distPath = pathResolve(__dirname, '..', 'dist')

function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file) => {
      const curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); // Delete folder recursively
      } else {
        fs.unlinkSync(curPath); // Delete file
      }
    });
    fs.rmdirSync(path);
  }
}

try {
  if (fs.statSync(distPath).isDirectory()) {
    delDir(distPath); // Delete folder recursively
  } else {
    fs.unlinkSync(distPath); // Delete file
  }
  console.log('--- clear dist ----')
} catch (error) {
  console.log('rxfile-write => remove error=', error)
}